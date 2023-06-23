import Quote from "@/components/Quote";
import { getRandomQuote } from "@/lib/getRandomQuote";

export default async function Home() {
  const RandomQuote = await getRandomQuote();
  return (
    <div>
      <Quote {...RandomQuote} />
    </div>
  );
}
