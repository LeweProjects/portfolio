import Link from "next/link";
import React from "react";

const head = () => {
  return (
    <div className="w-full flex z-30 bg-zinc-900 p-2 justify-center sticky top-0">
      <li className="list-none flex space-x-3 text-white font-">
        <Link href="/">Home</Link>
        <Link href="/About">About</Link>
        <Link href="/Profile">Profile</Link>
      </li>
    </div>
  );
};

export default head;
