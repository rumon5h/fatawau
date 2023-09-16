import { faEarthAmericas, faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center px-5 bg-[#E8F1F2]">
      <div className="flex bg-white justify-center items-center  p-5 rounded-[30px] gap-10">
        <span className="flex items-center cursor-pointer">
          {" "}
          <span className="mr-2 text-black">المفضلة</span>{" "}
          <FontAwesomeIcon width={20} height={20} icon={faHeart} />
        </span>
        <span className="flex items-center cursor-pointer">
          {" "}
          <span className="mr-2 text-black">ENGLISH</span>{" "}
          <FontAwesomeIcon width={20} height={20} icon={faEarthAmericas} />
        </span>
      </div>
      <div className="flex gap-7">
        <Link href="#">تواصل معنا</Link>
        <Link href="#">المدونات</Link>
        <Link href="#">مجموع الفتاوى</Link>
        <Link href="#">من نحن</Link>
        <Link href="#">الرئيسية</Link>
      </div>
      <div>
        <Image src="/logo.svg" alt="logo" width={88} height={89} />
      </div>
    </div>
  );
};

export default Navbar;
