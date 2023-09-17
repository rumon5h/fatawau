'use client'
import About from '@/components/about/About';
import Contact from '@/components/contact/Contact';
import { faMicrophone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import React from 'react'

const AboutUs = () => {
  return (
    <div>
      <div className='flex justify-center  bg-[#E7F0F2] py-8'>
      <div className="flex justify-center items-center w-[60%] ">
            <button className="py-5 px-10 text-lg font-bold rounded-3xl bg-[#116A7B] text-white mr-5">
              ابحث
            </button>{" "}
            <div className="w-full bg-white border-[3px] rounded-3xl border-[#116A7B] flex justify-evenly items-center">
            <FontAwesomeIcon className="ml-[7px] cursor-pointer" icon={faMicrophone} width={25} height={25}/>
              <input
                type="text"
                name="search"
                id="search"
                className="text-end border-none outline-none font-bold p-5 rounded-3xl w-full placeholder-slate-950"
                placeholder="ابد البحث عن حكم"
              />
            </div>
          </div>
      </div>
      <About/>
      <div className='my-16'>
        <h3 className='text-center text-[34px] text-[#116A7B] font-bold mb-4'>جهود العناية بالمحتوى</h3>
        <p className='text-center'>لقد حظي هذا العمل الموسوعي الضخم بعناية فائقة؛ لإخراجه في أفضل صورة ممكنة، مع الاعتذار عن كثير من السقط في تفريغ مواد الشيخ نظرا لضعف جودة التسجيلات </p>
        <p className='text-center'>في ذاك الزمان، وتمثل عمل الفريق في القيام بالمهام التالية</p>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-5 justify-items-center mt-8'>

        <div className='flex flex-col gap-4'>
        <div className='flex flex-row-reverse items-center'>
          <Image src="/edit_1.png" alt='' width={42} height={42}/>
          <p className='mr-7 font-bold text-[#363638] text-right'>التدقيق اللغوي والمطابقة النصية.</p>
        </div>
        <div className='flex flex-row-reverse items-center'>
          <Image src="/crown_11.png" alt='' width={42} height={42}/>
          <p className='mr-7 font-bold text-[#363638] text-right'>وضع العناوين لما يلزم.</p>
        </div>
        <div className='flex flex-row-reverse items-center'>
          <Image src="/diamond_1.png" alt='' width={42} height={42}/>
          <p className='mr-7 font-bold text-[#363638] text-right'>استخلاص الدرر والفوائد في نوافذ مستقلة.</p>
        </div>
        </div>

        <div className='flex flex-col gap-4'>
        <div className='flex flex-row-reverse items-center'>
          <Image src="/book_open_cover1.png" alt='' width={42} height={42}/>
          <p className='mr-7 font-bold text-[#363638] text-right'>جمع وفرز وترتيب المواد وإعداد السلاسل</p>
        </div>
        <div className='flex flex-row-reverse items-center'>
          <Image src="/sparkles_1.png" alt='' width={42} height={42}/>
          <p className='mr-7 font-bold text-[#363638] text-right'>التمييز بين الشروح قديمها وحديثها ، والاختيار بين النسخ الصوتية بحسب الأعلى جودة.</p>
        </div>
        <div className='flex flex-row-reverse items-center'>
          <Image src="/bookmark_1.png" alt='' width={42} height={42}/>
          <p className='mr-7 font-bold text-[#363638] text-right'>إدخال وتنسيق البيانات، وتصنيفها على الفهارس المتنوعة بشجرة التصنيف بالموقع.</p>
        </div>
        </div>

        </div>
      </div>
      
      <Contact/>
    </div>
  )
}

export default AboutUs;