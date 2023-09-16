import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const Footer = () => {
  return (
    <div className='mt-10 px-5 py-5'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-5 justify-center'>
        <div>
          
         <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>
          <div className='grid gap-3 mt-[50px]'>
            <Link className='text-right text-gray-700 text-[16px] font-bold' href="#">الربوبية والألوهية</Link>
            <Link className='text-right text-gray-700 text-[16px] font-bold' href="#">ضوابط التكفير</Link>
            <Link className='text-right text-gray-700 text-[16px] font-bold' href="#">الرقى والتمائم</Link>
            <Link className='text-right text-gray-700 text-[16px] font-bold' href="#">مسائل متفرقة في العقيدة</Link>
            <Link className='text-right text-gray-700 text-[16px] font-bold' href="#">الأدعية والأذكار</Link>
            <Link className='text-right text-gray-700 text-[16px] font-bold' href="#">الأيمان والنذور</Link>
          </div>

          <div className='grid gap-3'>
         <h4 className='text-[#116A7B] font-bold mb-3 text-right text-[20px]'>مواضيع تهمك</h4>
            <Link className='text-right text-gray-700 text-[16px] font-bold' href="#">الربوبية والألوهية</Link>
            <Link className='text-right text-gray-700 text-[16px] font-bold' href="#">ضوابط التكفير</Link>
            <Link className='text-right text-gray-700 text-[16px] font-bold' href="#">الرقى والتمائم</Link>
            <Link className='text-right text-gray-700 text-[16px] font-bold' href="#">مسائل متفرقة في العقيدة</Link>
            <Link className='text-right text-gray-700 text-[16px] font-bold' href="#">الأدعية والأذكار</Link>
            <Link className='text-right text-gray-700 text-[16px] font-bold' href="#">الأيمان والنذور</Link>
          </div>

         </div>
        </div>

        <div>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>
            <div className='grid gap-3 mt-[50px]'>
              <Link className='text-right text-gray-700 text-[16px] font-bold' href="#">الربوبية والألوهية</Link>
              <Link className='text-right text-gray-700 text-[16px] font-bold' href="#">ضوابط التكفير</Link>
              <Link className='text-right text-gray-700 text-[16px] font-bold' href="#">الرقى والتمائم</Link>
              <Link className='text-right text-gray-700 text-[16px] font-bold' href="#">مسائل متفرقة في العقيدة</Link>
              <Link className='text-right text-gray-700 text-[16px] font-bold' href="#">الأدعية والأذكار</Link>
              <Link className='text-right text-gray-700 text-[16px] font-bold' href="#">الأيمان والنذور</Link>
            </div>

            <div className='grid gap-3'>
            <h4 className='text-[#116A7B] font-bold mb-3 text-right text-[20px]'>اضيف حديثاً</h4>
              <Link className='text-right text-gray-700 text-[16px] font-bold' href="#">الربوبية والألوهية</Link>
              <Link className='text-right text-gray-700 text-[16px] font-bold' href="#">ضوابط التكفير</Link>
              <Link className='text-right text-gray-700 text-[16px] font-bold' href="#">الرقى والتمائم</Link>
              <Link className='text-right text-gray-700 text-[16px] font-bold' href="#">مسائل متفرقة في العقيدة</Link>
              <Link className='text-right text-gray-700 text-[16px] font-bold' href="#">الأدعية والأذكار</Link>
              <Link className='text-right text-gray-700 text-[16px] font-bold' href="#">الأيمان والنذور</Link>
            </div>

          </div>
        </div>

        <div>
          
          <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>
           
            <div className='grid gap-3 mt-[50px]'>
              <Link className='text-right text-gray-700 text-[16px] font-bold' href="#">الربوبية والألوهية</Link>
              <Link className='text-right text-gray-700 text-[16px] font-bold' href="#">ضوابط التكفير</Link>
              <Link className='text-right text-gray-700 text-[16px] font-bold' href="#">الرقى والتمائم</Link>
              <Link className='text-right text-gray-700 text-[16px] font-bold' href="#">مسائل متفرقة في العقيدة</Link>
              <Link className='text-right text-gray-700 text-[16px] font-bold' href="#">الأدعية والأذكار</Link>
              <Link className='text-right text-gray-700 text-[16px] font-bold' href="#">الأيمان والنذور</Link>
            </div>
            <div className='grid gap-3'>
            <h4 className='text-[#116A7B] font-bold mb-3 text-right text-[20px]'>الاكثر بحثاً</h4>
              <Link className='text-right text-gray-700 text-[16px] font-bold' href="#">الربوبية والألوهية</Link>
              <Link className='text-right text-gray-700 text-[16px] font-bold' href="#">ضوابط التكفير</Link>
              <Link className='text-right text-gray-700 text-[16px] font-bold' href="#">الرقى والتمائم</Link>
              <Link className='text-right text-gray-700 text-[16px] font-bold' href="#">مسائل متفرقة في العقيدة</Link>
              <Link className='text-right text-gray-700 text-[16px] font-bold' href="#">الأدعية والأذكار</Link>
              <Link className='text-right text-gray-700 text-[16px] font-bold' href="#">الأيمان والنذور</Link>
            </div>
          </div>
        </div>
        </div>

        
        <div className='flex justify-between items-center'>
          <p className='text-right text-[18px]'>جميع الحقوق محفوظة لـ فتوى ٢٠٢٣ © </p>
          <div className='flex items-center justify-center w-[671px]'>
            <p className='text-right mr-4 text-[18px]'>الفتوى هي رأي ديني أو قرار قانوني يُصدره فقيه أو عالِم دين مسلم مؤهل، يستند فيه إلى المصادر الشرعية والتشريعية للإسلام، مثل القرآن الكريم والسنة النبوية (الأحاديث)، وقد يستند أيضًا إلى تفسير العلماء والقوانين المعترف بها في الشريعة الإسلامية.</p>
            <Image src="/group2.png" alt='group2' width={88} height={99} />
          </div>
        </div>
    </div>
  )
}

export default Footer;