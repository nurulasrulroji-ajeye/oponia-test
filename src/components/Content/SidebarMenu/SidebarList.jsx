import React, { useState } from 'react'
import SidebarArtikel from './SidebarArtikel';
import SidebarPoling from './SidebarPoling';

const items = [
  {
    id: 1,
    title: "Semua",
    icon: <svg className='fill-current' width="25" height="18" viewBox="0 0 25 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 2H23M2 6.66667H23M2 11.3333H23M2 16H23" strokeWidth="2.25" strokeLinecap="round" /></svg>
  },
  {
    id: 2,
    title: "Idea",
    icon: <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16.4726 5.94356L18.3044 4.06152M4.20166 18.6662L5.58182 17.2358L4.20166 18.6662Z" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M10.9016 3.73621L10.8514 1.00098" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M5.58166 5.94356L3.7749 4.06152M17.8777 18.6662L16.4724 17.2358L17.8777 18.6662Z" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M18.8815 11.5903H21.165M0.88916 11.5903H3.1727H0.88916Z" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
      <path fillRule="evenodd" clipRule="evenodd" d="M13.5491 17.2613V21.0003H8.78124V17.2613C6.57298 16.3328 4.99207 14.1497 4.99207 11.5901C4.99207 8.17732 7.75239 5.41699 11.1652 5.41699C14.5779 5.41699 17.3383 8.17732 17.3383 11.5901C17.3383 14.1497 15.7824 16.3328 13.5491 17.2613Z" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M13.8627 18.7803H9.09485" strokeWidth="1.2" />
    </svg>
  },
  {
    id: 3,
    title: "Artikel",
    icon: <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="0.75" y="0.75" width="18.5" height="18.5" rx="4.25" strokeWidth="1.5" />
      <path d="M3.0769 5.76904H16.9231" strokeWidth="2" strokeLinejoin="round" />
      <path d="M3.0769 10.0005H16.9231" strokeWidth="2" strokeLinejoin="round" />
      <path d="M3.07678 14.6152H12.3076" strokeWidth="2" strokeLinejoin="round" />
    </svg>
  },
  {
    id: 4,
    title: "Poling",
    icon: <svg width="23" height="20" viewBox="0 0 23 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="0.59625" y="4.044" width="4.32474" height="15.3592" strokeWidth="1.1925" />
      <rect x="6.11346" y="0.59625" width="5.0144" height="18.8075" strokeWidth="1.1925" />
      <rect x="12.3205" y="6.11383" width="4.32474" height="13.2903" strokeWidth="1.1925" />
      <rect x="17.8375" y="13.6998" width="4.32474" height="5.70405" strokeWidth="1.1925" />
    </svg>
  },
  {
    id: 5,
    title: "Petisi",
    icon: <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6.47 11.333C6.47 9.38344 8.05044 7.80301 10 7.80301C11.9496 7.80301 13.53 9.38344 13.53 11.333V14.1963H6.47V11.333Z" strokeWidth="0.94" />
      <path d="M7.13663 3.33333C7.13663 1.75196 8.41858 0.47 9.99996 0.47C11.5813 0.47 12.8633 1.75196 12.8633 3.33333C12.8633 4.91471 11.5813 6.19667 9.99996 6.19667C8.41858 6.19667 7.13663 4.91471 7.13663 3.33333Z" strokeWidth="0.94" />
      <path d="M0.591094 11.9387C0.591094 10.3908 1.84592 9.13602 3.39382 9.13602C4.94172 9.13602 6.19655 10.3908 6.19655 11.9387V14.196H0.591094V11.9387Z" strokeWidth="0.94" />
      <path d="M1.1365 5.39329C1.1365 4.14663 2.14712 3.13602 3.39378 3.13602C4.64043 3.13602 5.65105 4.14663 5.65105 5.39329C5.65105 6.63995 4.64043 7.65056 3.39378 7.65056C2.14712 7.65056 1.1365 6.63995 1.1365 5.39329Z" strokeWidth="0.94" />
      <path d="M13.803 11.9387C13.803 10.3908 15.0578 9.13602 16.6057 9.13602C18.1536 9.13602 19.4085 10.3908 19.4085 11.9387V14.196H13.803V11.9387Z" strokeWidth="0.94" />
      <path d="M14.3484 5.39329C14.3484 4.14663 15.359 3.13602 16.6057 3.13602C17.8523 3.13602 18.863 4.14663 18.863 5.39329C18.863 6.63995 17.8523 7.65056 16.6057 7.65056C15.359 7.65056 14.3484 6.63995 14.3484 5.39329Z" strokeWidth="0.94" />
      <path d="M0.47 17.6668C0.47 16.6377 1.30424 15.8035 2.33333 15.8035H17.6667C18.6958 15.8035 19.53 16.6377 19.53 17.6668C19.53 18.6959 18.6958 19.5302 17.6667 19.5302H2.33333C1.30424 19.5302 0.47 18.6959 0.47 17.6668Z" strokeWidth="0.94" />
      <path d="M0 17.6668C0 16.3782 1.04467 15.3335 2.33333 15.3335H13.3333V20.0002H2.33333C1.04467 20.0002 0 18.9555 0 17.6668Z" />
    </svg>
  },
]

const SidebarList = () => {
  const [active, setActice] = useState(0);

  return (
    <aside className="w-full relative mt-[-40px] box-border h-[260px]" aria-label="Sidebar">
      <ul className='overflow-hidden'>
        {
          items.map((item, i) => (
            <li key={item.id} className='w-full'>
              <button onClick={() => setActice(i)} className={`${active === i ? "flex w-full h-[60px] items-center p-2 text-base font-normal text-gray-900 rounded-[10px] bg-[rgba(5,104,142,0.1)]" : "flex w-full h-[60px] items-center p-2 text-base font-normal text-gray-900 rounded-[10px] hover:bg-[rgba(5,104,142,0.1)]"}`}>
                <div className={`w-10 h-10 flex justify-center items-center ${i === active ? "stroke-white bg-[#05B1A1]" : "stroke-black border-solid border-[#A3A3A3] border-[0.75px]"}`}>
                  {item.icon}
                </div>
                <span className="ml-3">{item.title}</span>
                <h1>{active}</h1>
              </button>
            </li>
          ))
        }
        {
          active === 2 ? <SidebarArtikel />
            : active === 3 ? <SidebarPoling />
              : active === 0
        }
      </ul>
    </aside >
  )
}

export default SidebarList