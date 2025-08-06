"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Menu = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="h-20 px-4 md:px-8 lg:px-16 xl:32 2xl:px-64">
      Menu
      <Image
        src={"/menu.png"}
        alt="menu image"
        width={28}
        height={28}
        className="cursor-pointer"
        onClick={() => setOpen((prev) => !prev)}
      ></Image>
      {open && (
        <div className="absolute bg-black text-white left-0 top-20 w-full h-[100vh-80px] flex flex-col items-center justify-center gap-8 text-xl z-10">
          <Link href={"/"}>Home Page</Link>
          <Link href={"/"}>Shop</Link>
          <Link href={"/"}>Deals</Link>
          <Link href={"/"}>Contact</Link>
          <Link href={"/"}>Logout</Link>
          <Link href={"/"}>Cart(1)</Link>
        </div>
      )}
    </div>
  );
};

export default Menu;
