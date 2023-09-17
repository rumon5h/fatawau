import { faPaperclip } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import React from 'react'

const FatwaItem = ({data}) => {
  return (
    <div className='w-[272px] shadow-md rounded-md bg-white p-5'>
        <div className='flex justify-end mb-2 '><Image src="/question21.png" alt='question21' width={36} height={36} /></div>
        <h3 className='text-right text-[#116A7B] font-bold text-[20px]'>{data.title}</h3>
        <p className='text-right mt-2'>{data.description}</p>
        <div className='px-5 py-2 rounded-md ml-auto mt-4  shadow-md cursor-pointer w-fit'> <span className='text-right'>الربوبية والألوهية</span>  <FontAwesomeIcon className="ml-[7px] cursor-pointer" icon={faPaperclip} width={16} height={16}/> </div>
    </div>
  )
}

export default FatwaItem;