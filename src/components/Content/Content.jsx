import React from 'react'
import Artikel from './Artikel/Artikel'
import MenuPost from './MenuPost/MenuPost'
import SidebarMenu from './SidebarMenu/SidebarMenu'

const Content = () => {
  return (
    <article className='flex justify-between mt-[19px] w-[1132px] box-border mx-auto'>
      <div className='flex flex-col w-[459px] box-border'>
        <div className='flex w-full mb-5 h-[80px] bg-white shadow-[0_2px_4px_2px_rgba(0,0,0,0.1)] rounded-[5px]'>
          <div className='flex justify-center items-center w-[79.58px] h-80px'>
            <svg width="31" height="43" viewBox="0 0 31 43" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M11.7668 38.756L15.5568 36.3013L19.2866 38.6998L25.8238 42.9721V26.4263C23.0164 28.5624 19.4269 29.8554 15.5167 29.8554C11.6264 29.8554 8.03697 28.5624 5.20953 26.4263V42.9721L11.7668 38.756Z" fill="#733B0B" />
              <path fillRule="evenodd" clipRule="evenodd" d="M19.2865 38.7001V29.4435C18.0632 29.687 16.82 29.8557 15.5165 29.8557C14.2332 29.8557 12.9698 29.687 11.7667 29.4435V38.7564L15.5566 36.3017L19.2865 38.7001Z" fill="#EA6C00" />
              <path d="M15.5166 28.9373C24.0221 28.9373 30.9171 22.4943 30.9171 14.5463C30.9171 6.59842 24.0221 0.155365 15.5166 0.155365C7.01114 0.155365 0.116089 6.59842 0.116089 14.5463C0.116089 22.4943 7.01114 28.9373 15.5166 28.9373Z" fill="#EA6C00" />
              <path d="M15.5168 27.2325C23.0144 27.2325 29.0925 21.5529 29.0925 14.5467C29.0925 7.54052 23.0144 1.8609 15.5168 1.8609C8.0191 1.8609 1.94104 7.54052 1.94104 14.5467C1.94104 21.5529 8.0191 27.2325 15.5168 27.2325Z" fill="#332C2B" />
              <path fillRule="evenodd" clipRule="evenodd" d="M15.5166 24.1401L18.5245 18.631L21.5124 13.0845H15.5166H9.52081L12.5287 18.631L15.5166 24.1401Z" fill="#EA6C00" />
              <path fillRule="evenodd" clipRule="evenodd" d="M15.5166 7.38797L18.5245 10.2362L21.5124 13.0844H15.5166H9.52081L12.5287 10.2362L15.5166 7.38797Z" fill="#FEEEB7" />
              <path fillRule="evenodd" clipRule="evenodd" d="M9.52085 13.0845H5.67072L15.5166 24.1401L12.5288 18.631L9.52085 13.0845Z" fill="#733B0B" />
              <path fillRule="evenodd" clipRule="evenodd" d="M21.5124 13.0845H25.3625L15.5166 24.1401L18.5245 18.631L21.5124 13.0845Z" fill="#733B0B" />
              <path fillRule="evenodd" clipRule="evenodd" d="M21.5124 13.0848H25.3625L21.2918 7.81931L21.5124 13.0848Z" fill="#FDAD00" />
              <path fillRule="evenodd" clipRule="evenodd" d="M9.52085 13.0848H5.67072L9.76148 7.81931L9.52085 13.0848Z" fill="#FDAD00" />
              <path fillRule="evenodd" clipRule="evenodd" d="M15.5166 7.38797L9.76145 7.81895L9.52081 13.0844L12.5287 10.2362L15.5166 7.38797Z" fill="#FDD231" />
              <path fillRule="evenodd" clipRule="evenodd" d="M15.5166 7.38797L21.2918 7.81895L21.5124 13.0844L18.5245 10.2362L15.5166 7.38797Z" fill="#FDD231" />
            </svg>
          </div>
          <div className='flex items-center ml-[14.47px] w-[338.83px] box-border justify-between'>
            <div className='font-roboto'>
              <h4 className='font-bold text-[15px] mb-1 text-[#05678E] leading-[18px]'>Total Point Anda</h4>
              <p className='text-[15px] leading-[18px] font-bold text-[#EA6C00]'>17.4 <span className='text-[#CACACA] font-[400] ml-1'>Klaim hadiah</span></p>
            </div>
            <div className=''>
              <svg width="11" height="17" viewBox="0 0 11 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.00665 15.4577L8.75684 8.5325" stroke="#4B4B4B" strokeWidth="3" strokeLinecap="round" />
                <path d="M8.88394 8.27609L1.88394 1.66904" stroke="#4B4B4B" strokeWidth="3" strokeLinecap="round" />
              </svg>
            </div>
          </div>
        </div>
        <div className='flex justify-center items-center box-border mb-[25px] w-full h-[120px] bg-white shadow-[0_2px_4px_2px_rgba(0,0,0,0.1)] rounded-[5px]'>
          <div className='flex flex-col box-border w-[401px] h-[92px] font-roboto'>
            <div className='w-full h-[44px]'>
              <h4 className='text-[16px] font-normal text-center leading-[140%] tracking-[-0.02em] text-[#1E1E1E]'>Melengkapi profil membantu kami memvalidasi akun Anda, dan memudahkan Opinian lainnya memahami Anda</h4>
            </div>
            <div className='w-full h-[22px] mt-[6px]'>
              <p className='text-[16px] font-normal text-center leading-[140%] tracking-[-0.02em] text-[#797979]'>Lengkapi Profil Anda 5/8</p>
            </div>
            <div className='mt-[6px]'>
              <svg width="401" height="14" viewBox="0 0 401 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="2" y="2" width="285" height="10" fill="#EA6C00" />
                <rect x="287" y="2" width="112" height="7" fill="white" />
                <rect x="1" y="1" width="399" height="12" stroke="#05B1A1" strokeWidth="2" />
              </svg>
            </div>
          </div>
        </div>
        <div className='flex justify-center items-center box-border w-full h-[340px] bg-white shadow-[0_2px_4px_2px_rgba(0,0,0,0.1)] rounded-[5px] mb-[33px]'>
          <SidebarMenu />
        </div>
        <div className='flex relative justify-center box-border w-[219px] h-[407px] mb-28'>
          <MenuPost />
        </div>
      </div>
      <div className='w-[650px]'>
        <Artikel />
      </div>
    </article>
  )
}

export default Content