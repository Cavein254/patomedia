import React from "react";
import {
  AiFillFacebook,
  AiFillTwitterCircle,
  AiFillYoutube,
} from "react-icons/ai";
import { FaSoundcloud } from "react-icons/fa";
import { GiMusicalScore } from "react-icons/gi";

const MultiMedia = () => {
  return (
    <div className="text-white">
      <div className="flex flex-row text-4xl justify-center items-center ">
        <div className="px-6">
          <AiFillFacebook />
        </div>
        <div className="px-6">
          <AiFillTwitterCircle />
        </div>
        <div className="px-6">
          <AiFillYoutube />
        </div>
        <div className="px-6">
          <FaSoundcloud />
        </div>
      </div>
      <div className="max-w-full flex justify-center pt-4">
        <div className="px-6  py-2 flex flex-row items-center border-white hover:bg-red-400 hover:cursor-pointer rounded-full ">
          <div>
            {" "}
            <GiMusicalScore size={24} />
          </div>
          <div>MUSIC Follow</div>
        </div>
      </div>
      <div className="flex justify-center text-white">
        <div className="py-8">&#169; Pate Media 2022. All Rights Reserved.</div>
      </div>
    </div>
  );
};

export default MultiMedia;
