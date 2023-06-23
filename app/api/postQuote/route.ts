import postQuote from "@/lib/postQuote";

export async function POST(req: Request) {
    const data = await req.json();
    const res = await postQuote(data.author, data.category, data.quote);    
    return new Response(JSON.stringify(res))
  }
