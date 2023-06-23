"use client";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

const Quote = (RandomQuote: Quote) => {
  const router = useRouter();
  const [fade, setFade] = useState(false);
  const [data, setData] = useState(0);

  useEffect(() => {
    const fetchData = () => {
      setData(data + 1);
    };

    const interval = setInterval(() => {
      fetchData();
      setFade(true);
      setTimeout(() => {
        router.refresh();
      }, 700);
      setTimeout(() => {
        setFade(false);
      }, 1400);
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [data]);

  return (
    <>
      <section
        className={`flex flec-col justify-center items-center transition-opacity ease-in-out duration-1000 h-full ${
          fade ? "opacity-0 " : "opacity-100"
        }`}
        style={{height: "calc(80vh - 6rem)"}}
      >
        <div className="flex flex-col justify-center items-center mt-10 w-5/6">
          <h1 className="text-5xl font-bold text-center text-slate-50 mb-10">
            &quot;{RandomQuote.quote}&quot;
          </h1>
          <h2 className="text-xl font-bold text-center w-full text-slate-50">
            - {RandomQuote.author}
          </h2>

          <h3 className="text-xl font-bold text-center w-full text-slate-400 opacity-50">
            {RandomQuote.category}
          </h3>
        </div>
      </section>
    </>
  );
};

export default Quote;
