import React from 'react';
import stars from "../img/stars.png";

const HeroContent = () => {
  return (
    <div className='relative'>
      <div className='flex w-[880px] absolute h-[94px] right-0'>
        <div className='basis-1/2 box-border'>
          <div className='flex flex-col'>
            <div className='flex w-[270px] h-[25.75px] box-border mt-[18px]'>
              <div className='mr-[24px]'>
                <h1 className='font-roboto font-[600] text-[20px] leading-[23px]'>Ryudan Sese</h1>
              </div>
              <div>
                <ul className='flex mt-[-3px]'>
                  <li className='mr-[2px]'><img src={stars} alt="raiting" /></li>
                  <li className='mr-[2px]'><img src={stars} alt="raiting" /></li>
                  <li className='mr-[2px]'><img src={stars} alt="raiting" /></li>
                  <li className='mr-[2px]'><img src={stars} alt="raiting" /></li>
                  <li className='mr-[2px]'><img src={stars} alt="raiting" /></li>
                </ul>
              </div>
            </div>
            <div className=' mt-[10px] max-w-[363px]'>
              <p className='font-roboto text-[15px] font-[400] leading-[25px] text-[#9F9F9F]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the..</p>
            </div>
          </div>
        </div>
        <div className='relative basis-1/2 box-border'>
          <div className='absolute right-0 mt-3 mr-10'>
            <button className='w-[210px] h-[48px] bg-[#05B1A1] rounded-[5px] font-roboto font-[500] text-[16px] leading-[19px] text-white'>Edit Profil</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroContent