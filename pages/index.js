import Head from "next/head";

export default function Home() {
  return (
    <div>
      {/* Header */}
      <Head>
        {/* logo */}
        <div className="flex flex-row justify-between bg-black p-0 m-0">
          <div className="flex flex-col text-white">
            <div className=" text-2xl">PATO</div>
            <div className=" text-sm">International</div>
            <div className="text-xs">+253 444 333</div>
          </div>
          {/* Mid */}
          <div className="">
            <div>TICKETS</div>
            <div>PREVIOUS LINEUPS</div>
            <div>MERCH</div>
            <div>SUSTAINABILITY</div>
            <div>MEDIA</div>
            <div>HELP</div>
            <div>MORE</div>
            <div>WORLDWIDE</div>
          </div>
          {/* login */}
          <div className="flex flex-row text-white">
            <div className="flex flex-row text-white xs:hidden pr-2">
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
    </div>
  );
}
