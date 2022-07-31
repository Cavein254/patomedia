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
      <footer className="">
        <div className="bg-black">
          {/* Call to action button  */}
          <div className=" flex justify-between flex-col-reverse md:flex-row-reverse px-24 mx-auto">
            <form className="pb-12">
              <div>
                {/* form image  */}
                <div className="flex flex-col min-w-full justify-center items-center">
                  <div>Image</div>
                  <div className="text-white pt-4">
                    Do you have an account? Sign up to register for events, earn
                    points, and more!
                  </div>
                  <div className="pt-4">
                    <input
                      className="text-lg text-white px-2 py-4 rounded-sm bg-black ring-white border-x-white ring-opacity-50 focus:ring-blue-300 focus:border-2 focus:ring-2 focus:border-blue-300"
                      type="text"
                      placeholder="Enter email address to get started..."
                    />
                  </div>
                  <div className="pt-4">
                    {/* Todo: Add a forward button ">" */}
                    <button
                      type="submit"
                      className="text-black bg-blue-300 text-lg max-w-full rounded-sm px-4 py-2 "
                    >
                      GET STARTED{" "}
                    </button>
                  </div>
                </div>
              </div>
            </form>
            {/* Links */}
            <div className="text-white flex flex-row justify-around">
              <div className="">
                <div className="">LineUp</div>
                <div className="">Tickets</div>
                <div className="">Previous LineUps</div>
                <div className="">LiveSets</div>
                <div className="">Gallery</div>
                <div className="">News</div>
                <div className="">Help</div>
                <div className="">Contact Us</div>
              </div>
              <div className="">
                <div className="">Ultra Worldwide</div>
                <div className="">Road to Ultra</div>
                <div className="">RESISTANCE</div>
                <div className="">UMF Films</div>
                <div className="">UMF Tv</div>
                <div className="">UMF Radio</div>
              </div>
            </div>
            {/* Large logo */}
            <div className="">
              <div className="text-white">
                <div className=" text-2xl">PATO</div>
                <div className=" text-sm">International</div>
                <div className="text-xs">+253 444 333</div>
                <div className="text-xs">Kasarani Nairobi</div>
                <div className="text-xl pt-8">240 days, 03:33:11</div>
              </div>
              <div className=""></div>
              <div className=""></div>
              <div className=""></div>
            </div>
          </div>
          <hr className="border-2 border-blue-300" />
          <div className=""></div>
          <div className=""></div>
        </div>
      </footer>
    </div>
  );
}
