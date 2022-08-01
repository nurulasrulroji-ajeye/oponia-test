import React from 'react'
import avatar from './img/avatar.png'

const Head = () => {
  return (
    <div className='flex justify-center items-center w-full h-[142px] box-border'>
      <div className='flex flex-col w-[612.67px] h-[112px] box-border'>
        <div className='flex w-full justify-between h-[60px]'>
          <div className='flex cursor-pointer'>
            <img src={avatar} alt="avatar" />
            <div className='flex flex-col ml-[23.14px] justify-center'>
              <h4 className='font-roboto text-[17px] font-semibold leading-[20px] text-[#393939]'>Ryudan Sesa</h4>
              <p className='font-roboto text-[14px] font-normal leading-[16px] text-[#797979] mt-[10px]'>10 menit lalu Opini</p>
            </div>
          </div>
          <div className='flex items-center cursor-pointer'>
            <svg width="30" height="8" viewBox="0 0 30 8" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="0.137207" width="7.63158" height="7.63158" rx="2" fill="#A3A3A3" />
              <rect x="21.5059" width="7.63158" height="7.63158" rx="2" fill="#A3A3A3" />
              <rect x="10.8213" width="7.63158" height="7.63158" rx="2" fill="#A3A3A3" />
            </svg>
          </div>
        </div>
        <div className='mt-[30px]'>
          <h2 className='text-[19px] font-roboto font-medium text-[#393939] leading-[22px]'>Belajar Menjadi Manusia</h2>
        </div>
      </div>
    </div>
  )
}

export default Head