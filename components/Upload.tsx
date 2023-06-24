import { useState, FormEvent } from "react";

const Upload = () => {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  const [category, setCategory] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setIsSubmitting(true); // Disable the button

    fetch("/api/postQuote", {
      method: "POST",
      body: JSON.stringify({
        quote: quote,
        author: author,
        category: category,
      }),
    }).then((res) => {
      if (res.ok) {
        setIsSuccess(true);
        setQuote("");
        setAuthor("");
        setCategory("");
        setTimeout(() => {
          setIsSuccess(false);
        }, 3000);
      }

      setIsSubmitting(false); // Enable the button
    });
  };

  return (
    <div className="flex flex-col justify-center items-center mt-10 transition-opacity ease-in-out duration-1000 h-96 ">
      <div className="flex flex-col justify-center items-center mt-10 w-5/6 p-8 rounded-lg shadow-lg">
        {isSuccess && (
          <div className="flex justify-center items-center w-80 bg-green-200 text-gray-800 text-lg font-bold rounded-lg p-4 mb-4">
            Success!
          </div>
        )}
        <h1 className="text-5xl font-bold text-center text-gray-400 mb-10">
          Upload Your Thoughts
        </h1>
        <form
          className="flex justify-center align-middle flex-col"
          onSubmit={handleSubmit}
        >
          <label className="text-xl font-bold text-left w-full text-gray-400">
            Who are you?
            <input
              type="text"
              name="author"
              value={author}
              placeholder="Enter a name"
              onChange={(e) => setAuthor(e.target.value)}
              required
              className="mt-2 w-full text-black px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-slate-300"
            />
          </label>

          <br />
          <label className="text-xl font-bold text-left w-full text-gray-400">
            What are you thingking about?
            <input
              type="text"
              name="quote"
              value={quote}
              placeholder="Enter your thoughts"
              onChange={(e) => setQuote(e.target.value)}
              required
              className="mt-2 w-full text-black px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-slate-300"
            />
          </label>

          <br />

          <label className="text-xl font-bold text-left w-full text-gray-400">
            What is it about?
            <input
              type="text"
              name="category"
              value={category}
              placeholder="ie: Life, Love, etc."
              onChange={(e) => setCategory(e.target.value)}
              required
              className="mt-2 w-full text-black px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-slate-300"
            />
          </label>

          <br />
          <button
            type="submit"
            disabled={isSubmitting} // Disable the button when isSubmitting is true
            className="mt-4 px-4 py-2 text-gray-400 font-bold bg-slate-700 rounded-lg hover:bg-slate-800"
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Upload;
