import { useState, FormEvent } from "react";

const Upload = () => {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    fetch("/api/postQuote", {
      method: "POST",
      body: JSON.stringify({
        quote: quote,
        author: author,
        category: category,
      }),
    }).then((res) => {
      if (res.ok) {
        alert("Quote uploaded successfully!");
        setQuote("");
        setAuthor("");
        setCategory("");
      }
    });
  };

  return (
    <div className="flex flex-col justify-center items-center mt-10 transition-opacity ease-in-out duration-1000 h-96 ">
      <div className="flex flex-col justify-center items-center mt-10 w-5/6 p-8 rounded-lg shadow-lg">
        <h1 className="text-5xl font-bold text-center text-gray-400 mb-10">
          Upload a Quote
        </h1>
        <form className="flex justify-center align-middle flex-col">
          <label className="text-xl font-bold text-center w-full text-gray-400">
            Quote
            <input
              type="text"
              name="quote"
              value={quote}
              onChange={(e) => setQuote(e.target.value)}
              required
              className="mt-2 w-full text-black px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-slate-300"
            />
          </label>

          <br />
          <label className="text-xl font-bold text-center w-full text-gray-400">
            Author
            <input
              type="text"
              name="author"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              required
              className="mt-2 w-full text-black px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-slate-300"
            />
          </label>

          <br />
          <label className="text-xl font-bold text-center w-full text-gray-400">
            Category
            <input
              type="text"
              name="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              required
              className="mt-2 w-full text-black px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-slate-300"
            />
          </label>

          <br />
          <button
            type="submit"
            onClick={handleSubmit}
            className="mt-4 px-4 py-2 text-gray-400 font-bold bg-slate-700 rounded-lg hover:bg-slate-800"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Upload;
