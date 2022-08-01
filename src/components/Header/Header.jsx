import React from 'react'
import HeroContent from './HeroContent/HeroContent'
import HeroImg from './HeroImg/HeroImg'
import PhotoProfil from './PhotoProfil/PhotoProfil'

const Header = () => {
  return (
    <header className='flex flex-col relative mt-[89px] w-[1132px] box-border h-[433px] bg-white mx-auto rounded-[5px] shadow-[0_2px_4px_rgba(0,0,0,0.1)]'>
      <div className='w-full h-[314px] box-border'>
        <HeroImg />
      </div>
      <PhotoProfil />
      <div className='w-full h-[119px]'>
        <HeroContent />
      </div>
    </header >
  )
}

export default Header