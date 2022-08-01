import React from 'react'
import pp from "../img/pp.png"

const PhotoProfil = () => {
  return (
    <div className='absolute bottom-0'>
      <div className='relative mb-[28px] ml-[40px]'>
        <img src={pp} alt="photoProfil" />
        <div className='absolute bottom-0 right-0 mr-[16px]'>
          <div className='flex justify-center items-center w-[49px] h-[49px] bg-[#EBEBEB] rounded-full'>
            <svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M11 14.4102C9.17746 14.4102 7.7 12.9361 7.7 11.1178C7.7 9.29945 9.17746 7.82541 11 7.82541C12.8225 7.82541 14.3 9.29945 14.3 11.1178C14.3 12.9361 12.8225 14.4102 11 14.4102ZM19.8 2.33811C21.01 2.33811 22 3.32582 22 4.53303V17.7025C22 18.9097 21.01 19.8975 19.8 19.8975H2.2C0.99 19.8975 0 18.9097 0 17.7025V4.53303C0 3.32582 0.99 2.33811 2.2 2.33811H5.687L7.04 0.856537C7.458 0.406579 8.052 0.143188 8.668 0.143188H13.332C13.948 0.143188 14.542 0.406579 14.949 0.856537L16.313 2.33811H19.8ZM11 16.6051C14.036 16.6051 16.5 14.1468 16.5 11.1178C16.5 8.0888 14.036 5.63049 11 5.63049C7.964 5.63049 5.5 8.0888 5.5 11.1178C5.5 14.1468 7.964 16.6051 11 16.6051Z" fill="#939393" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PhotoProfil