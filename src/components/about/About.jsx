import { faEarthAmericas, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className="px-5 my-9">
      <h3 className="text-[#116A7B] text-6xl ring-0 font-bold text-right px-5 mb-5">
        عن فتوى .. ؟
      </h3>
      <div className="flex justify-end">
        {" "}
        <Image
          className="mr-[35px]"
          src="/vector_3.png"
          alt=""
          width={116}
          height={15}
        />
      </div>
      <div className="grid grid-cols-2 justify-center justify-items-center">
        <div className="flex ">
          <div>
            <span className="flex items-center  bg-white py-[8px] px-[27px] rounded-[32px] text-black font-extrabold shadow-2xl w-fit relative top-[30px] right-[-70px]">
              <h4 className="mr-2">دعم اكثر من لغة</h4>{" "}
              <FontAwesomeIcon width={20} height={20} icon={faEarthAmericas} />
            </span>
            <Image
              className="relative z-10 top-[60px] right-[-108px]"
              src="/group7.png"
              alt=""
              width={50}
              height={50}
            />
            <Image
              className="relative top-[65px] right-[-110px]"
              src="/group8.png"
              alt=""
              width={45}
              height={45}
            />
          </div>
          <div className="shadow-lg p-3 rounded-md">
            <Image
              src="/rectangle2.png"
              alt="rectangle2"
              width={282}
              height={201}
            />
            <div className="bg-white h-[85px]">
              <Image
                className="mt-[10px]"
                src="/rectangle3.png"
                alt="rectangle3"
                width={241}
                height={25}
              />
              <Image
                className="ml-auto mt-[20px]"
                src="/rectangle_4.png"
                alt="rectangle3"
                width={118}
                height={25}
              />
            </div>
          </div>
          <div>
            <span className="flex items-center  bg-white py-[8px] px-[27px] rounded-[32px] text-black font-extrabold shadow-2xl w-fit relative top-[50px] left-[-36px]">
              <h4>ابحث عن ما تريد</h4>{" "}
              <FontAwesomeIcon
                className="ml-3"
                width={15}
                height={15}
                icon={faSearch}
              />
            </span>
            <Image
              className="relative top-[103px] left-[58px]"
              src="/like_1.svg"
              alt="like1"
              width={78}
              height={78}
            />
            <Image
              className="relative top-[123px] left-[30px]"
              src="/thumbs_up1.svg"
              alt="thumbs_up1"
              width={48}
              height={48}
            />
          </div>
        </div>

        <div>
          <p className="mt-5 text-black text-lg text-right">
            الفتوى هي رأي ديني أو قرار قانوني يُصدره فقيه أو عالِم دين مسلم
            مؤهل، يستند فيه إلى المصادر الشرعية والتشريعية للإسلام، مثل القرآن
            الكريم والسنة النبوية (الأحاديث)، وقد يستند أيضًا إلى تفسير العلماء
            والقوانين المعترف بها في الشريعة الإسلامية.
          </p>
          <div className="flex justify-end mt-5">
            <div className="text-right mr-4 ">
                <h4 className="font-extrabold text-black text-lg">ابحث عن سؤالك</h4>
                <p>نتائج بحث سريعة لسؤالك مع دقة النتائج للاسئلة</p>
            </div>
            <div>
              <Image src="/question_1.png" alt="" width={45} height={45}/>
            </div>
          </div>
          <div className="flex justify-end mt-5">
            <div className="text-right mr-4 ">
                <h4 className="font-extrabold text-black text-lg">اجابة دقيقة من اكثر المصادر ثقة</h4>
                <p>ستحصل سريعاً على إجابات من مصادر موثوقة</p>
            </div>
            <div>
              <Image src="/contract_1.png" alt="" width={45} height={45}/>
            </div>
          </div>
          <p className="text-right bg-[#9B9134] px-10 py-5 mt-[23px] rounded-md text-white">يعتمد موقع فتوى علي جميع الفتاوى من المواقع والمصادر الموثوقة لتساعد الناس للمعرفة اكثر في الدين الاسلامي</p>
        </div>
        

      </div>
    </div>
  );
};

export default About;
