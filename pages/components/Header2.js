import Link from "next/link";
import React from "react";

function Header2() {
  return (
    <>
      <div className="flex flex-row justify-between bg-black ">
        <div className="flex flex-col text-white">
          <div className=" text-2xl">PATE</div>
          <div className=" text-sm">International</div>
          <div className="text-xs">+253 444 333</div>
        </div>
        <div>
          <div className="text-gray-400 text-xs hidden md:flex">
            <div className="pr-2">
              <Link href="/">TICKETS</Link>
            </div>
            <div className="pr-2">
              <Link href="/">PREVIOUS LINEUPS</Link>
            </div>
            <div className="pr-2">
              <Link href="/">MERCH</Link>
            </div>
            <div className="pr-2">
              <Link href="/">SUSTAINABILITY</Link>
            </div>
            <div className="pr-2">
              <Link href="/">MEDIA</Link>
            </div>
            <div className="pr-2">
              <Link href="/">HELP</Link>
            </div>
            <div className="pr-2">
              <Link href="/">MORE</Link>
            </div>
            <div className="pr-2">
              <Link href="/">WORLDWIDE</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header2;
