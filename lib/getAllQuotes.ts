import { connect } from "@planetscale/database";
import { dbConfig } from "@/db/config";
import { drizzle } from "drizzle-orm/planetscale-serverless";
import { quotes, authors, categories } from "@/db/schema";
import { eq } from "drizzle-orm";

const getAllQuotes = async (): Promise<Quote[]> => {
  const conn = await connect(dbConfig);
  const db = drizzle(conn);
  const results: Quote[] = await db
    .select({
      quote: quotes.quote,
      author: authors.author,
      category: categories.category,
    })
    .from(quotes)
    .innerJoin(authors, eq(quotes.authorId, authors.id))
    .innerJoin(categories, eq(quotes.categoryId, categories.id));

    return results;
};

export default getAllQuotes;
