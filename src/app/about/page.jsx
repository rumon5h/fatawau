import { faMicrophone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
    </div>
  )
}

export default AboutUs;