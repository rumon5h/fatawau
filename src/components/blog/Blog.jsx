import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import React from "react";

const Blog = ({ data }) => {
  return (
    <div className="shadow-lg p-5 rounded-md w-[369px]">
      <Image src={data.image} alt={data.title} width={327} height={339} />
      <h3 className="text-right text-[20px] text-[#242426] font-bold mt-2">
        {data.title}
      </h3>
      <p className="text-right mt-2">{data?.description}</p>
      <div className="cursor-pointer shadow-md w-fit px-5 py-3 rounded-md ml-auto mt-3">
       <span className="text-right"> ٢٠ مايو ٢٠٢٣ </span> <FontAwesomeIcon icon={faGlobe} width={16} height={16} />
      </div>
    </div>
  );
};

export default Blog;
