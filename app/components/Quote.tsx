"use client";
import { Poppins, Roboto } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});

import { useRouter } from "next/navigation";
import { useState } from "react";

const Quote = (RandomQuote: Quote) => {
  const router = useRouter();
  const [fade, setFade] = useState(false);

  return (
    <>
      <section
        className={`flex flec-col justify-center items-center mt-10 transition-opacity ease-in-out duration-1000 h-96 ${
          fade ? "opacity-0" : "opacity-100"
        }`}
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
      <div
        className={`flex flex-col justify-start mt-10 items-center flec-col transition-opacity ease-in-out duration-1000 h-96 ${
          fade ? "opacity-0" : "opacity-100"
        }`}
      >
        <button
          type="submit"
          className="mt-1 bg-slate-50 text-black font-bold py-2 px-4 rounded-full transition-opacity ease-in-out duration-1000 hover:opacity-50 active:scale-105"
          onClick={() => {
            setFade(true);
            setTimeout(() => {
              router.refresh();
            }, 700);
            setTimeout(() => {
              setFade(false);
            }, 1400);
          }}
        >
          Refresh
        </button>
      </div>
    </>
  );
};

export default Quote;
