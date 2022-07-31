import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      {/* Header */}
      <Head>
        {/* logo */}
        <div className="flex flex-row justify-between bg-black pl-2 m-0">
          <div className="flex flex-col text-white">
            <div className=" text-2xl">PATO</div>
            <div className=" text-sm">International</div>
            <div className="text-xs">+253 444 333</div>
          </div>
          {/* Mid */}
          {/* Todo: Make it hidden in small devices */}
          <div className="text-gray-400 font-xs xs:hidden md:visible flex flex-row justify-between lg:visible mt-8">
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
          {/* login */}
          <div className="flex flex-row  mt-8 font-sm ">
            <div className="flex flex-row xs:hidden pr-2 mr-4 text-gray-400">
              <div className="">Create My Account / </div>
              <div className="">Login</div>
            </div>
            <div className="flex flex-row">
              <div className="">Icon</div>
              <div className="">=</div>
            </div>
          </div>
        </div>
      </Head>
      <footer>
        <div className="">
          {/* Call to action button  */}
          <div className=""></div>
          <div className=""></div>
          <div className=""></div>
        </div>
      </footer>
    </div>
  );
}
