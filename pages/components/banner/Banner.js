import Image from "next/image";
import React from "react";
import HeroImg from "../../../public/imgs/pate.jpg";

function Banner() {
  return (
    <div className="flex flex-col justify-center items-center py-8">
      <Image src={HeroImg} height="375gtpx" alt="banner" />
    </div>
  );
}

export default Banner;
