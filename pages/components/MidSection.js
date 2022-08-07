import React from "react";
import MultiMedia from "./MultiMedia";
const MidSection = () => {
  return (
    <div>
      <footer className="">
        <div className="bg-black bg-opacity-70 py-16">
          {/* Call to action button  */}
          <div className=" flex justify-between flex-col-reverse md:flex-row-reverse px-24 mx-auto ">
            <form className="pb-12">
              <div>
                {/* form image  */}
                <div className="flex flex-col min-w-full justify-center items-center">
                  <div className="text-white pt-4 text-lg">
                    Do you have an account? Sign up to register for events, earn
                    points, and more!
                  </div>
                  <div className="pt-4">
                    <input
                      className=" text-white px-2 py-4 rounded-sm text-lg bg-black ring-white border-x-white ring-opacity-50 focus:ring-blue-300 focus:border-2 focus:ring-2 focus:border-blue-300"
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
                      GET STARTED &#8594;
                    </button>
                  </div>
                </div>
              </div>
            </form>
            {/* Links */}
            <div className="text-white flex flex-row justify-around text-md">
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
                <div className=" text-2xl">PATE</div>
                <div className=" text-sm">International</div>
                <div className="text-xs">+253 444 333</div>
                <div className="text-xs">Kasarani Nairobi</div>
                <div className="text-xl pt-8">240 days, 03:33:11</div>
              </div>
            </div>
          </div>
          <MultiMedia />
        </div>
      </footer>
    </div>
  );
};

export default MidSection;
