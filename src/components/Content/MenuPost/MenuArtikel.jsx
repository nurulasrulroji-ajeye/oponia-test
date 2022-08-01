import React, { useState } from 'react'

const MenuArtikel = () => {
  const [back, setBack] = useState(false)
  return (
    <div className={!back ? "absolute w-full h-full top-0 flex flex-col overflow-hidden transition-[height_500ms_esae]" : "hidden"}>
      <button className='flex items-center w-full h-[66px] rounded-[100px] bg-[#05B1A1] box-border' onClick={() => setBack(!back)}>
        <div className='ml-[29px]'>
          <svg width="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.5 2L2 10.5M2 10.5L10.5 19M2 10.5H20" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <div className='ml-[34px]'>
          <h4 className='font-roboto font-semibold leading-5 text-[17px] text-white'>Artikel</h4>
        </div>
      </button>
      <div className='w-[151px] h-[318px] mt-[17px] flex flex-col justify-between '>
        <button className='flex items-center w-full h-[71px] rounded-[35.5px] bg-white box-border mb-[10px]'>
          <div className='w-[53px] h-[53px] ml-[11px] bg-[#05B1A1] rounded-full flex justify-center items-center'>
            <svg width="29" height="30" viewBox="0 0 29 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20.75 2V24.2857C20.75 26.2667 22.1042 28 23.875 28C25.5417 28 27 26.3905 27 24.2857V13.1429H20.75" stroke="white" strokeWidth="3" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M20.75 2V24.2857C20.75 25.8952 21.5833 27.2571 22.8333 27.7524V28H6.16667H5.125C3.35417 28 2 26.2667 2 24.2857V2H20.75Z" stroke="white" strokeWidth="3" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M6.16699 8.19043H12.417" stroke="white" strokeWidth="3" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M6.16602 13.1426H8.24935" stroke="white" strokeWidth="3" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <div className='ml-[11px]'>
            <h4 className='font-roboto font-normal text-[17px] text-[#2E2E2E] leading-5'>Artikel</h4>
          </div>
        </button>
        <button className='flex items-center w-full h-[71px] rounded-[35.5px] bg-white box-border mb-[10px]'>
          <div className='w-[53px] h-[53px] ml-[11px] bg-[#05B1A1] rounded-full flex justify-center items-center'>
            <svg width="29" height="30" viewBox="0 0 29 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20.75 2V24.2857C20.75 26.2667 22.1042 28 23.875 28C25.5417 28 27 26.3905 27 24.2857V13.1429H20.75" stroke="white" strokeWidth="3" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M20.75 2V24.2857C20.75 25.8952 21.5833 27.2571 22.8333 27.7524V28H6.16667H5.125C3.35417 28 2 26.2667 2 24.2857V2H20.75Z" stroke="white" strokeWidth="3" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M6.16699 8.19043H12.417" stroke="white" strokeWidth="3" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M6.16602 13.1426H8.24935" stroke="white" strokeWidth="3" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <div className='ml-[11px]'>
            <h4 className='font-roboto font-normal text-[17px] text-[#2E2E2E] leading-5'>Artikel</h4>
          </div>
        </button>
        <button className='flex items-center w-full h-[71px] rounded-[35.5px] bg-white box-border mb-[10px]'>
          <div className='w-[53px] h-[53px] ml-[11px] bg-[#05B1A1] rounded-full flex justify-center items-center'>
            <svg width="29" height="30" viewBox="0 0 29 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20.75 2V24.2857C20.75 26.2667 22.1042 28 23.875 28C25.5417 28 27 26.3905 27 24.2857V13.1429H20.75" stroke="white" strokeWidth="3" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M20.75 2V24.2857C20.75 25.8952 21.5833 27.2571 22.8333 27.7524V28H6.16667H5.125C3.35417 28 2 26.2667 2 24.2857V2H20.75Z" stroke="white" strokeWidth="3" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M6.16699 8.19043H12.417" stroke="white" strokeWidth="3" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M6.16602 13.1426H8.24935" stroke="white" strokeWidth="3" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <div className='ml-[11px]'>
            <h4 className='font-roboto font-normal text-[17px] text-[#2E2E2E] leading-5'>Artikel</h4>
          </div>
        </button>
        <button className='flex items-center w-full h-[71px] rounded-[35.5px] bg-white box-border mb-[10px]'>
          <div className='w-[53px] h-[53px] ml-[11px] bg-[#05B1A1] rounded-full flex justify-center items-center'>
            <svg width="29" height="30" viewBox="0 0 29 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20.75 2V24.2857C20.75 26.2667 22.1042 28 23.875 28C25.5417 28 27 26.3905 27 24.2857V13.1429H20.75" stroke="white" strokeWidth="3" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M20.75 2V24.2857C20.75 25.8952 21.5833 27.2571 22.8333 27.7524V28H6.16667H5.125C3.35417 28 2 26.2667 2 24.2857V2H20.75Z" stroke="white" strokeWidth="3" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M6.16699 8.19043H12.417" stroke="white" strokeWidth="3" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M6.16602 13.1426H8.24935" stroke="white" strokeWidth="3" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <div className='ml-[11px]'>
            <h4 className='font-roboto font-normal text-[17px] text-[#2E2E2E] leading-5'>Artikel</h4>
          </div>
        </button>
      </div>
    </div>
  )
}

export default MenuArtikel