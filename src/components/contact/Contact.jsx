import { faEnvelope, faPen, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import React from "react";

const Contact = () => {
  return (
    <div className="px-40 grid grid-cols-1 md:grid-cols-2 gap-5  my-16">
      <div className="flex items-center bg-white p-5 rounded-md shadow-2xl w-fit">
        <div className="mr-5">
          <Image
            className="mt-2 cursor-pointer"
            src="/facebook_icon.png"
            alt=""
            width={48}
            height={48}
          />
          <Image
            className="mt-2 cursor-pointer"
            src="/linkedin_icon.png"
            alt=""
            width={48}
            height={48}
          />
          <Image
            className="mt-2 cursor-pointer"
            src="/logo-instagram.png"
            alt=""
            width={48}
            height={48}
          />
          <Image
            className="mt-2 cursor-pointer"
            src="/twitter_icon.png"
            alt=""
            width={48}
            height={48}
          />
          <Image
            className="mt-2 cursor-pointer"
            src="/youtube_icon.png"
            alt=""
            width={48}
            height={48}
          />
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex w-[419px] h-[52px] shadow-xl items-center p-4 bg-white rounded-md">
            <input
              className="w-full outline-none border-none h-full p-4 text-right"
              type="text"
              name="name"
              id="name"
              placeholder="الاسم بالكامل"
            />
            <FontAwesomeIcon icon={faUser} width={16} height={16} />
          </div>
          <div className="flex w-[419px] h-[52px] shadow-xl items-center p-4 bg-white rounded-md">
            <input
              className="w-full outline-none border-none h-full p-4 text-right"
              type="email"
              name="email"
              id="email"
              placeholder="البريد الالكتروني"
            />{" "}
            <FontAwesomeIcon icon={faEnvelope} width={16} height={16} />
          </div>
          <div className="h-[114px] flex w-[419px] shadow-xl items-center p-4 bg-white rounded-md">
            <textarea
              className="outline-none border-none w-full h-full text-right py-7 px-4"
              name="message"
              id="message"
              placeholder="نص الرسالة"
            ></textarea>
            <FontAwesomeIcon icon={faPen} width={16} height={16} />
          </div>
        </div>
      </div>

      <div>
        <div>
          <h3 className="text-right text-[34px] font-bold  text-[#116A7B]">
            تواصل معنا
          </h3>
          <p className="text-4 text-black text-right">
            ليس لأحد أن يفسر كتاب الله بخلاف ما فسره به رسوله صلى الله عليه وسلم
          </p>
        </div>

        <div className="flex items-center flex-row-reverse mt-10">
          <div className="flex flex-row-reverse">
            <Image
              className="ml-3"
              src="/email1.png"
              alt=""
              width={64}
              height={64}
            />
            <div className="mt-5">
              <p className="text-right">البريد الالكتروني</p>
              <p className="text-right">info@fatawa.com</p>
            </div>
          </div>
          <div className="mt-5 mr-14" >
            <p className="text-right">البريد الالكتروني</p>
            <p className="text-right">info@fatawa.com</p>
          </div>
        </div>
        
        <div className="flex items-center flex-row-reverse mt-10">
          <div className="flex flex-row-reverse">
            <Image
              className="ml-3"
              src="/call1.png"
              alt=""
              width={64}
              height={64}
            />
            <div className="mt-5">
              <p className="text-right">البريد الالكتروني</p>
              <p className="text-right">info@fatawa.com</p>
            </div>
          </div>
          <div className="mt-5 mr-14" >
            <p className="text-right">البريد الالكتروني</p>
            <p className="text-right">info@fatawa.com</p>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Contact;
