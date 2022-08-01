import React, { useState } from 'react'
import MenuArtikel from './MenuArtikel';
import MenuPoling from './MenuPoling';

const Dropdown = () => {
  const [back, setBack] = useState(false);
  const [poling, setPoling] = useState(false);
  const [art, setArt] = useState(false);

  return (
    <>
      <div className={!back ? "absolute w-full h-full top-0 flex flex-col overflow-hidden transition-[height_500ms_esae]" : "hidden"}>
        <button className='flex items-center w-full h-[66px] rounded-[100px] bg-[#05B1A1] box-border' onClick={() => setBack(!back)}>
          <div className='ml-6'>
            <svg width="34" height="46" viewBox="0 0 34 46" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12.9954 32.1408C13.9411 32.1408 14.7077 31.3529 14.7077 30.3809C14.7077 29.409 13.9411 28.6211 12.9954 28.6211C12.0498 28.6211 11.2832 29.409 11.2832 30.3809C11.2832 31.3529 12.0498 32.1408 12.9954 32.1408Z" fill="#FEFEFE" />
              <path d="M31.1654 16.4276C28.7387 19.3649 26.2135 21.7831 23.602 23.7202C20.9906 25.6699 18.2805 27.1259 15.4966 28.1134C15.1763 28.2274 14.8314 28.0501 14.7205 27.721C14.6713 27.569 14.6713 27.4171 14.7205 27.2905C16.4082 22.011 18.6254 17.2506 21.3601 13.0092C21.3724 12.9839 21.3847 12.9713 21.3971 12.9459C21.6065 12.6168 21.8282 12.2876 22.0499 11.9584C25.1049 7.42587 28.7634 3.48839 33.0132 0.133311C33.2842 -0.0819206 33.6661 -0.0312779 33.8755 0.247257C33.9617 0.361204 34.011 0.513132 33.9986 0.652399C33.974 1.45002 33.974 2.33627 33.974 3.27316C33.9863 6.59026 34.011 10.4011 32.3726 12.2116C31.3872 13.3004 29.638 13.7942 27.7779 13.9841C29.0097 14.3892 30.1061 14.8704 31.0299 15.4907C31.3133 15.6806 31.3995 16.0731 31.2147 16.3643C31.2024 16.3896 31.1901 16.4023 31.1654 16.4276ZM22.8876 22.6947C25.2404 20.9475 27.5316 18.7825 29.7488 16.1744C28.8619 15.6806 27.8026 15.2882 26.6323 14.959C25.265 14.5665 23.7498 14.2626 22.1854 14.0094C19.8203 17.757 17.8494 21.897 16.2973 26.4549C18.5515 25.5433 20.7442 24.2899 22.8876 22.6947ZM23.06 12.6674L22.9984 12.756C25.7331 12.9206 29.9583 13.0219 31.4734 11.3507C32.7791 9.90736 32.7668 6.36237 32.7545 3.27316C32.7545 2.81738 32.7422 2.37425 32.7545 1.95645C29.0344 5.04566 25.7947 8.61597 23.06 12.6674Z" fill="#FEFEFE" />
              <path d="M0.923871 39.3589C0.406503 39.3589 0 38.9411 0 38.4093C0 37.8903 0.406503 37.4598 0.923871 37.4598H5.61714V32.6361C5.61714 32.1043 6.03596 31.6865 6.54101 31.6865C7.04606 31.6865 7.46488 32.1043 7.46488 32.6361V37.4598H12.1581C12.6755 37.4598 13.082 37.8903 13.082 38.4093C13.082 38.9411 12.6755 39.3589 12.1581 39.3589H7.46488V44.1953C7.46488 44.7144 7.04606 45.1448 6.54101 45.1448C6.03596 45.1448 5.61714 44.7144 5.61714 44.1953V39.3589H0.923871Z" fill="#FEFEFE" />
            </svg>
          </div>
          <div className='ml-5'>
            <h4 className='font-roboto text-[17px] font-semibold leading-5 text-white'>Buat Postingan</h4>
          </div>
        </button>
        <div className='w-[151px] h-[318px] mt-[17px] flex flex-col justify-between overflow-auto'>
          <button className='flex items-center w-full h-[71px] rounded-[35.5px] bg-white box-border'>
            <div className='w-[53px] h-[53px] ml-[11px] bg-[#05B1A1] rounded-full flex justify-center items-center'>
              <svg width="25" height="28" viewBox="0 0 25 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.2288 26.3929V17.8365L8.03711 14.6279" stroke="white" strokeWidth="2" strokeLinecap="round" />
                <path d="M13.8874 26.393V17.8366L17.0791 14.6279" stroke="white" strokeWidth="2" strokeLinecap="round" />
                <path fillRule="evenodd" clipRule="evenodd" d="M12.44 1C18.7606 1 23.88 6.1523 23.88 12.5007C23.88 16.7732 18.1257 19.7383 18.1257 22.4832C18.1257 22.4832 18.1781 23.2357 18.1257 23.7131C17.6447 28.0956 7.23531 28.0956 6.75432 23.7131C6.70191 23.2357 6.75432 22.4832 6.75432 22.4832C6.72 20.3062 1 16.7732 1 12.5007C1 6.1523 6.1194 1 12.44 1Z" stroke="white" strokeWidth="2" />
              </svg>

            </div>
            <div className='ml-[11px]'>
              <h4 className='font-roboto font-normal text-[17px] text-[#2E2E2E] leading-5'>Idea</h4>
            </div>
          </button>
          <button className='flex items-center w-full h-[71px] rounded-[35.5px] bg-white box-border' onClick={() => setArt(!art)}>
            <div className='w-[53px] h-[53px] ml-[11px] bg-[#05B1A1] rounded-full flex justify-center items-center'>
              <svg width="23" height="26" viewBox="0 0 23 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21.2635 26H1.25079C0.919063 26 0.600918 25.863 0.366349 25.6192C0.13178 25.3754 0 25.0448 0 24.7V1.3C0 0.955219 0.13178 0.624558 0.366349 0.380761C0.600918 0.136964 0.919063 0 1.25079 0H21.2635C21.5952 0 21.9134 0.136964 22.1479 0.380761C22.3825 0.624558 22.5143 0.955219 22.5143 1.3V24.7C22.5143 25.0448 22.3825 25.3754 22.1479 25.6192C21.9134 25.863 21.5952 26 21.2635 26ZM20.0127 23.4V2.6H2.50159V23.4H20.0127ZM5.00317 5.2H10.0063V10.4H5.00317V5.2ZM5.00317 13H17.5111V15.6H5.00317V13ZM5.00317 18.2H17.5111V20.8H5.00317V18.2ZM12.5079 6.5H17.5111V9.1H12.5079V6.5Z" fill="white" />
              </svg>
            </div>
            <div className='ml-[11px]'>
              <h4 className='font-roboto font-normal text-[17px] text-[#2E2E2E] leading-5'>Artikel</h4>
            </div>
          </button>
          <button className='flex items-center w-full h-[71px] rounded-[35.5px] bg-white box-border' onClick={() => setPoling(!poling)}>
            <div className='w-[53px] h-[53px] ml-[11px] bg-[#05B1A1] rounded-full flex justify-center items-center'>
              <svg width="18" height="30" viewBox="0 0 18 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 27.9995V11.8027" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M16 28V2" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M2 27.9999V21.6064" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div className='ml-[11px]'>
              <h4 className='font-roboto font-normal text-[17px] text-[#2E2E2E] leading-5'>Poling</h4>
            </div>
          </button>
          <button className='flex items-center w-full h-[71px] rounded-[35.5px] bg-white box-border'>
            <div className='w-[53px] h-[53px] ml-[11px] bg-[#05B1A1] rounded-full flex justify-center items-center'>
              <svg width="29" height="30" viewBox="0 0 29 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.75 2V24.2857C20.75 26.2667 22.1042 28 23.875 28C25.5417 28 27 26.3905 27 24.2857V13.1429H20.75" stroke="white" strokeWidth="3" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M20.75 2V24.2857C20.75 25.8952 21.5833 27.2571 22.8333 27.7524V28H6.16667H5.125C3.35417 28 2 26.2667 2 24.2857V2H20.75Z" stroke="white" strokeWidth="3" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M6.16699 8.19043H12.417" stroke="white" strokeWidth="3" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M6.16602 13.1426H8.24935" stroke="white" strokeWidth="3" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
              </svg>

            </div>
            <div className='ml-[11px]'>
              <h4 className='font-roboto font-normal text-[17px] text-[#2E2E2E] leading-5'>Petisi</h4>
            </div>
          </button>
        </div>
        {
          poling && <MenuPoling />
        }
        {
          art && <MenuArtikel />
        }
      </div>
    </>
  )
}

export default Dropdown