"use client";
import Image from "next/image";
import React from "react";
import FatwaItem from "../fatwaItem/FatwaItem";

const Fatwa = () => {
  const fatwaData = [
    {
      title: "السبيل إلى معرفة التوحيد اعتقادًا وسلوكًا وعملًا",
      description:
        "س: يقول السائل: جزاكم الله خيرًا على محاضرتكم الوافية، وجعلها الله في ميزان أعمالكم، وسؤالي هو: كيف السبيل إلى معرفة حقيقة التوحيد اعتقادا وسلوكا وعملا؟",
    },
    {
      title: "السبيل إلى معرفة التوحيد اعتقادًا وسلوكًا وعملًا",
      description:
        "س: يقول السائل: جزاكم الله خيرًا على محاضرتكم الوافية، وجعلها الله في ميزان أعمالكم، وسؤالي هو: كيف السبيل إلى معرفة حقيقة التوحيد اعتقادا وسلوكا وعملا؟",
    },
    {
      title: "السبيل إلى معرفة التوحيد اعتقادًا وسلوكًا وعملًا",
      description:
        "س: يقول السائل: جزاكم الله خيرًا على محاضرتكم الوافية، وجعلها الله في ميزان أعمالكم، وسؤالي هو: كيف السبيل إلى معرفة حقيقة التوحيد اعتقادا وسلوكا وعملا؟",
    },
    {
      title: "السبيل إلى معرفة التوحيد اعتقادًا وسلوكًا وعملًا",
      description:
        "س: يقول السائل: جزاكم الله خيرًا على محاضرتكم الوافية، وجعلها الله في ميزان أعمالكم، وسؤالي هو: كيف السبيل إلى معرفة حقيقة التوحيد اعتقادا وسلوكا وعملا؟",
    },
    {
      title: "السبيل إلى معرفة التوحيد اعتقادًا وسلوكًا وعملًا",
      description:
        "س: يقول السائل: جزاكم الله خيرًا على محاضرتكم الوافية، وجعلها الله في ميزان أعمالكم، وسؤالي هو: كيف السبيل إلى معرفة حقيقة التوحيد اعتقادا وسلوكا وعملا؟",
    }
  ];

  return (
    <div
      className="h-[689px] my-10 px-5"
      style={{ background: `url('/background_up.png')` }}
    >
      <div className="relative left-[40%] bottom-[-70px] ">
        <Image
          className=""
          src="/vector.svg"
          alt="vector"
          width={168}
          height={231}
        />
      </div>
      <h3 className="text-center mt-[90px] text-white text-3xl">
        مجموع الفتاوى
      </h3>
      <p className="text-center text-white mt-5 text-2xl ">
        ليس لأحد أن يفسر كتاب الله بخلاف ما فسره به رسوله صلى الله عليه وسلم
      </p>
      <div
       
        className="flex gap-5 justify-center mt-5 "

      >
        {fatwaData.map((data) => {
          return <FatwaItem key={Math.random()} data={data} />;
        })}
      </div>
    </div>
  );
};

export default Fatwa;
