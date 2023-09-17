import { faMicrophone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import React from "react";

const Banner = () => {
  return (
    <div
      style={{ background: `url('/background_banner.png')` }}
      className="w-full h-[80vh]  bg-no-repeat px-5 bg-white mt-[-97px]"
    >
      <div className="pt-[150px]">
        <h3 className="text-[#116A7B] font-bold text-center text-[15px]">
          ابدا البحث عن الفتوى التي تريدها
        </h3>
        <h2 className="font-extrabold text-center text-black mt-5 text-[34px]">
          ليس لأحد أن يفسر <span className="text-[#116A7B]">كتاب الله </span>
          بخلاف ما فسره به رسوله صلى الله عليه وسلم
        </h2>
        <div className="flex  justify-evenly mt-10">
          <div className="">
            <Image src="/Shape-498.svg" alt="" width={150} height={150} />
          </div>
          <div className="flex justify-center items-center w-[60%]">
            <button className="py-5 px-10 text-lg font-bold rounded-md bg-[#116A7B] text-white mr-5">
              ابحث
            </button>{" "}
            <div className="w-full bg-white border-[3px] rounded-md border-[#116A7B] flex justify-evenly items-center">
            <FontAwesomeIcon className="ml-[7px] cursor-pointer" icon={faMicrophone} width={25} height={25}/>
              <input
                type="text"
                name="search"
                id="search"
                className="text-end border-none outline-none font-bold p-5 rounded-md w-full placeholder-slate-950"
                placeholder="ابد البحث عن حكم"
              />
            </div>
          </div>
          <div className="mt-[-57px]">
            <Image src="/Shape-4981.svg" alt="" width={106} height={106} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
