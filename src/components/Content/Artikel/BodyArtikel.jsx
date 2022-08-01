import React from 'react'
import postingan from "./img/postingan.png"

const BodyArtikel = () => {
  return (
    <div className='flex flex-col justify-center items-center w-[650px] h-[467px] box-border'>
      <div className='w-full relative h-[352px]'>
        <img src={postingan} alt="postingan" />
        <span className='absolute w-[650px] h-[105px] bg-gradient-to-t from-[#696969] to-[rgba(0,0,0,0.001)] bottom-0'></span>
        <span className='absolute flex justify-center items-center bg-white rounded-full box-border top-0 right-0 w-[33px] h-[33px] mr-5 mt-[18px] border-solid border-[2px] border-[#05B1A1]'>
          <svg width="13" height="15" viewBox="0 0 13 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.75 8.22577H6.5H3.25C1.45519 8.22577 0 9.95901 0 12.0968C0 13.7002 1.29983 15 2.90325 15H10.0968C11.7002 15 13 13.7002 13 12.0968C13 9.95901 11.5448 8.22577 9.75 8.22577Z" fill="#05678E" />
            <path d="M9.99994 3.76348V3.01079C9.99994 1.34808 8.43281 0 6.49994 0C4.56706 0 2.99994 1.34808 2.99994 3.01079V3.76348C2.99994 5.42619 4.56706 6.77427 6.49994 6.77427C8.43281 6.77427 9.99994 5.42619 9.99994 3.76348Z" fill="#05678E" />
          </svg>
        </span>
      </div>
      <div className='flex justify-center items-center mt-[15px]'>
        <div className='w-[605px] h-[100px]'>
          <p className='font-roboto text-[15px] font-normal leading-[25px] text-[#393939]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into...<span className='font-medium leading-[15px] text-[#05B1A1] italic ml-1'><a href='#read'>Selengkapnya</a></span></p>
        </div>
      </div>
    </div>
  )
}

export default BodyArtikel