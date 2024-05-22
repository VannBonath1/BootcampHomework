"use client";
import React from "react";
import Image from "next/image";
import Logo from "../../../public/Logo.png";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header: React.FC = () => {
  const currentPath = usePathname();
  return (
    <div>
      <div className="h-20 flex justify-center bg-orange-900 relative">
        <Image
          className="absolute left-1"
          src={Logo}
          width={80}
          alt="Picture of the author"
        />
        <div
          className={currentPath === "/DataFetching" ? "underline p-6" : "p-6"}
        >
          <Link className=" text-white" href="/DataFetching">
            Server side
          </Link>
        </div>
        <div
          className={
            currentPath === "/DataFetching/About" ? "underline p-6" : "p-6"
          }
        >
          <Link className="text-white" href="/DataFetching/About">
            About
          </Link>
        </div>
        <div
          className={
            currentPath === "/DataFetching/Favorite" ? "underline p-6" : "p-6"
          }
        >
          <Link className="text-white" href="/DataFetching/Favorite">
            Favorite
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
