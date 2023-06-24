"use client";
import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const Navbar = () => {
  const [page, setPage] = useState("Add Yours");
  const path = usePathname();
  const router = useRouter();

  useEffect(() => {
    if (path == "/") {
      setPage("Add Your");
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
    <nav className="text-white font-bold flex justify-between items-center mx-1 h-16 select-none">
      <div
        className="mr-10 text-lg hover:text-gray-400 px-6 py-2 rounded-xl  bg-gray-900 transition-colors cursor-pointer mx-5"
        onClick={handleClick}
      >
        {page} &nbsp;
        {path == "/" && <FontAwesomeIcon icon={faPenToSquare} />}
      </div>
      <div className="mx-5">
        <Link href="https://www.github.com/Akshay-Vs" target="_blank">
          <FontAwesomeIcon
            icon={faGithub}
            size="xs"
            className="text-3xl mx-2 text-slate-50 hover:text-slate-300 transition-colors ease-in-out duration-700 cursor-pointer"
          />
        </Link>
        <Link href="https://www.instagram.com/Akshay._.Vs__" target="_blank">
          <FontAwesomeIcon
            icon={faInstagram}
            size="xs"
            className="text-3xl mx-2 text-slate-50 hover:text-slate-300 transition-colors ease-in-out duration-700 cursor-pointer"
          />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
