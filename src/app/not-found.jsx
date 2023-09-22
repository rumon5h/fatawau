import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const NotFound = () => {
  return (
    <div className='h-[85vh] flex justify-center items-center'>
        <div>
        <Image className='mx-auto' src="/error_404_1.png" alt='not found page' width={174} height={74}/>
        <h2 className='text-3xl text-center text-[#116A7B] my-4'>لم يتم العتور علي الصفخة</h2>
        <p className='text-[18px] text-[#1C1C1E] text-center'>قم الرجوع للصفة الرئيسية لمتابعة كل الفتاوي المعروض او ابدا عملية بحث عن الفتوى التي تريدها</p>
        <Link  className='text-[20px] mt-4 text-center text-white bg-[#116A7B] py-4 px-[20px] w-[383px] block mx-auto rounded-3xl' href="/">الرئيسية</Link>
        </div>
    </div>
  )
}

export default NotFound;