import { connect } from "@planetscale/database";
import { dbConfig } from "@/db/config";
import { drizzle } from "drizzle-orm/planetscale-serverless";
import { quotes, authors, categories } from "@/db/schema";
import { eq } from "drizzle-orm";

const postQuote = async (author: string, category: string, quote: string) => {
  const conn = await connect(dbConfig);
  const db = drizzle(conn);

  let author_id = await db
    .select({ id: authors.id })
    .from(authors)
    .where(eq(authors.author, author));

  if (author_id === null || author_id.length === 0) {
    const res = await db.insert(authors).values({
      author: author,
    });
    author_id = await db
      .select({ id: authors.id })
      .from(authors)
      .where(eq(authors.author, author));
  }

  let category_id = await db
    .select({ id: categories.id })
    .from(categories)
    .where(eq(categories.category, category));

  if (category_id === null || category_id.length === 0) {
    const res = await db.insert(categories).values({
      category: category,
    });
    category_id = await db
      .select({ id: categories.id })
      .from(categories)
      .where(eq(categories.category, category));
  }

  const res = await db.insert(quotes).values({
    quote: quote,
    authorId: author_id[0].id,
    categoryId: category_id[0].id,
  });

  return { author_id, category_id, res };
};

export default postQuote;
