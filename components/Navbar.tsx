"use client";
import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";

const Navbar = () => {
  const [page, setPage] = useState("Upload");
  const path = usePathname();
  const router = useRouter();

  useEffect(() => {
    if (path == "/") {
      setPage("Upload");
    } else {
      setPage("Home");
    }
  }, [path]);

  const handleClick = () => {
    if (path == "/") {
      router.push("/upload");
    } else {
      router.push("/");
    }
  };
  return (
    <nav className="text-white font-bold flex justify-between items-center mx-1 h-16 ">
      <div
        className="mr-10 text-lg hover:text-gray-400 px-6 py-2 rounded-xl  bg-gray-900 transition-colors cursor-pointer mx-5"
        onClick={handleClick}
      >
        {page}
      </div>
    </nav>
  );
};

export default Navbar;
