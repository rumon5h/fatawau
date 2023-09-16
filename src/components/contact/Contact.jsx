import { faEnvelope, faPen, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import React from "react";

const Contact = () => {
  return (
    <div className="px-5 grid grid-cols-1 md:grid-cols-2 gap-5 mt-5">
      <div className="flex items-center bg-white p-5 rounded-md shadow-2xl w-fit">
        <div className="mr-5">
          <Image className="mt-2 cursor-pointer" src="/facebook_icon.png" alt="" width={48} height={48} />
          <Image className="mt-2 cursor-pointer" src="/linkedin_icon.png" alt="" width={48} height={48} />
          <Image className="mt-2 cursor-pointer" src="/logo-instagram.png" alt="" width={48} height={48} />
          <Image className="mt-2 cursor-pointer" src="/twitter_icon.png" alt="" width={48} height={48} />
          <Image className="mt-2 cursor-pointer" src="/youtube_icon.png" alt="" width={48} height={48} />
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex w-[419px] h-[52px] shadow-xl items-center p-[16px] bg-white rounded-md">
            <input className="w-full outline-none border-none h-full p-[16px] text-right" type="text" name="name" id="name" />
            <FontAwesomeIcon icon={faUser} width={16} height={16} />
          </div>
          <div className="flex w-[419px] h-[52px] shadow-xl items-center p-[16px] bg-white rounded-md" >
            <input className="w-full outline-none border-none h-full p-[16px] text-right" type="email" name="email" id="email" />{" "}
            <FontAwesomeIcon icon={faEnvelope} width={16} height={16} />
          </div>
          <div className="h-[114px] flex w-[419px] shadow-xl items-center p-[16px] bg-white rounded-md">
            <textarea className="outline-none border-none w-full h-full text-right" name="message" id="message"></textarea>
            <FontAwesomeIcon icon={faPen} width={16} height={16} />
          </div>
        </div>
      </div>
      <div>
       <div>
       <h3>تواصل معنا</h3>
        <p>ليس لأحد أن يفسر كتاب الله بخلاف ما فسره به رسوله صلى الله عليه وسلم</p>
       </div>
       <div>

       </div>
       <div></div>
      </div>
    </div>
  );
};

export default Contact;
