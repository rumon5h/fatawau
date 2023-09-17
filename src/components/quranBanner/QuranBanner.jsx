import Image from 'next/image';
import React from 'react'

const QuranBanner = () => {
  return (
    <div className='flex justify-center mt-[-150px] px-5'>
        <div className='flex flex-col gap-y-10 relative'>
            <h3 className='absolute top-[-21px] right-[-101px] bg-white py-[8px] px-[27px] rounded-[32px] text-black font-extrabold'>لا ينكر مسلم شفاعة الرسول</h3>
            <Image className='absolute top-[93px] right-[-76px]' src="/insurance.svg" alt='badge1' width={100} height={100}  />
            <h2 className='relative top-[220px] right-[-199px] bg-white py-[8px] px-[27px] rounded-[32px] text-black font-extrabold'>حكم من يسب ويشتم القدر</h2>
        </div>
        <div>
            <Image className='' src="/qwith _tand_close.png" alt='Quran' width={521} height={435}/>
        </div>
        <div className='flex flex-col gap-y-10'>
            <h1 className=' relative top-[13px] left-[-123px] bg-white py-[8px] px-[27px] rounded-[32px] text-black font-extrabold'>التكاسل عن أداء بعض الواجبات</h1>
            <h3 className=' relative top-[58px] left-[-182px] bg-white py-[8px] px-[27px] rounded-[32px] text-black font-extrabold'>في حكم الاحتفال بالموالد النبوية وغيرها</h3>
            <Image className='relative top-[65px] left-[-36px]' src="/magnifying_glass.svg" alt='badge1' width={30} height={30}  />
        </div>
    </div>
  )
}

export default QuranBanner;