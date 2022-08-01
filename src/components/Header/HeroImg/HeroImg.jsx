import React from 'react'
import banner from "../img/banner.png"

const HeroImg = () => {
  return (
    <div className='relative'>
      <img src={banner} alt="banner" />
      <div className='flex w-[880px] absolute bottom-0 h-[96px] right-0'>
        <div className='basis-1/2 box-border'>
          <div className='w-[328px] h-[78px] rounded-[5px] box-border bg-[rgba(255,255,255,0.7)]'>
            <ul className='flex w-full h-full justify-between items-center px-[21px] box-border'>
              <li>
                <a className='flex flex-col items-center justify-center font-roboto' href="post">
                  <p className='text-[17px] font-[600] leading-[30px] text-[rgba(18,18,18,0.45)]'>Postingan</p>
                  <p className='text-[17px] font-[600] leading-[30px] text-[#121212]'>12</p>
                </a>
              </li>
              <li>
                <a className='flex flex-col items-center justify-center font-roboto' href="mengikuti">
                  <p className='text-[17px] font-[600] leading-[30px] text-[rgba(18,18,18,0.45)]'>Mengikuti</p>
                  <p className='text-[17px] font-[600] leading-[30px] text-[#121212]'>5</p>
                </a>
              </li>
              <li>
                <a className='flex flex-col items-center justify-center font-roboto' href="pengikut">
                  <p className='text-[17px] font-[600] leading-[30px] text-[rgba(18,18,18,0.45)]'>Pengikut</p>
                  <p className='text-[17px] font-[600] leading-[30px] text-[#121212]'>5</p>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className='basis-1/2 box-border'>
          <div className='flex ml-[292px] mt-[32px] box-border'>
            <div className='flex justify-center items-center w-[49px] h-[49px] bg-[rgba(0,0,0,0.4)] rounded-full mr-[10px]'>
              <svg width="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M11 14.655C9.17746 14.655 7.7 13.1809 7.7 11.3626C7.7 9.54427 9.17746 8.07022 11 8.07022C12.8225 8.07022 14.3 9.54427 14.3 11.3626C14.3 13.1809 12.8225 14.655 11 14.655ZM19.8 2.58292C21.01 2.58292 22 3.57063 22 4.77784V17.9474C22 19.1546 21.01 20.1423 19.8 20.1423H2.2C0.99 20.1423 0 19.1546 0 17.9474V4.77784C0 3.57063 0.99 2.58292 2.2 2.58292H5.687L7.04 1.10135C7.458 0.651391 8.052 0.388 8.668 0.388H13.332C13.948 0.388 14.542 0.651391 14.949 1.10135L16.313 2.58292H19.8ZM11 16.8499C14.036 16.8499 16.5 14.3916 16.5 11.3626C16.5 8.33361 14.036 5.8753 11 5.8753C7.964 5.8753 5.5 8.33361 5.5 11.3626C5.5 14.3916 7.964 16.8499 11 16.8499Z" fill="white" fillOpacity="0.6" />
              </svg>
            </div>
            <div className='flex justify-center items-center w-[49px] h-[49px] bg-[rgba(0,0,0,0.4)] rounded-full'>
              <svg width="18" height="22" viewBox="0 0 18 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.291212 5.41803H17.7088C17.786 5.41797 17.86 5.38735 17.9146 5.33287C17.9692 5.2784 17.9999 5.20453 18 5.12749C18 4.87882 17.951 4.63258 17.8556 4.40284C17.7602 4.17309 17.6204 3.96434 17.4442 3.78851C17.2679 3.61267 17.0587 3.4732 16.8284 3.37805C16.5981 3.2829 16.3513 3.23395 16.1021 3.23398H13.2123V2.45989C13.2117 1.91119 12.9929 1.38515 12.604 0.997164C12.2151 0.609179 11.6879 0.390938 11.1379 0.39032H6.86212C6.31215 0.39094 5.78489 0.609181 5.396 0.997166C5.00711 1.38515 4.78836 1.91119 4.78774 2.45989V3.23398H1.89791C1.64866 3.23395 1.40185 3.2829 1.17157 3.37805C0.941295 3.4732 0.732059 3.61267 0.555816 3.78851C0.379572 3.96434 0.239775 4.17309 0.144407 4.40284C0.0490392 4.63258 -3.0724e-05 4.87882 1.44324e-08 5.12749C5.51126e-05 5.20453 0.0307541 5.2784 0.085355 5.33287C0.139956 5.38735 0.213995 5.41797 0.291212 5.41803ZM7.36879 1.69274H10.6312C10.9695 1.69274 11.294 1.82682 11.5332 2.06549C11.7724 2.30416 11.9068 2.62786 11.9068 2.96539V3.23398H6.09318V2.96539C6.09318 2.62786 6.22758 2.30416 6.4668 2.06549C6.70602 1.82682 7.03048 1.69274 7.36879 1.69274L7.36879 1.69274Z" fill="white" fillOpacity="0.6" />
                <path d="M17.7088 6.65033H0.291212C0.213995 6.65038 0.139956 6.68101 0.085355 6.73549C0.030754 6.78996 5.50982e-05 6.86383 0 6.94087V8.04292C0 8.20322 3.01757 19.4291 3.01757 19.4291C3.06108 19.9453 3.29732 20.4264 3.6795 20.7771C4.06168 21.1278 4.56193 21.3225 5.08117 21.3226H12.9188C13.4381 21.3225 13.9383 21.1278 14.3205 20.7771C14.7027 20.4264 14.9389 19.9453 14.9824 19.4291C14.9824 19.4291 18 8.20322 18 8.04292V6.94087C17.9999 6.86383 17.9692 6.78996 17.9146 6.73549C17.86 6.68101 17.786 6.65038 17.7088 6.65033Z" fill="white" fillOpacity="0.6" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroImg