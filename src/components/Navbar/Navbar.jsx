import React from 'react'
import logo from "./img/logo.png"
import iconpp from './img/iconpp.png'

const Navbar = () => {
  return (
    <nav className="bg-white fixed z-50 top-0 box-border w-[1920px] h-[80px] border-gray-200 shadow-[0_4px_4px_rgba(97,198,230,0.1)] dark:bg-gray-900">
      <div className="w-full box-border h-[80px] pt-[1px] flex items-center">
        <div className='order-1 basis-1/3'>
          <a href="/home" className="inline-block ml-[35px] mt-[4px]">
            <img src={logo} className="mr-3 w-[169px] h-[54px] " alt="Logo" />
          </a>
        </div>
        <div className="order-2 basis-1/3 box-border">
          <div className="relative ml-[58px]">
            <div className="flex absolute inset-y-0 right-[64px] items-center pr-3 pointer-events-none">
              <svg width="19" height="16" viewBox="0 0 19 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 15C11.866 15 15 11.866 15 8C15 4.13401 11.866 1 8 1C4.13401 1 1 4.13401 1 8C1 11.866 4.13401 15 8 15Z" stroke="#919191" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M17.1487 14.9999L14.2988 12.5293" stroke="#919191" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <input type="input" id="default-search" className="inline-block p-4 pl-5 w-[524px] h-[52px] mt-[-2px] text-[19px] font-roboto rounded-[5px] border text-gray-900 bg-[#F5FBFF] focus:ring-transparent focus:outline-none focus:border-none placeholder:font-roboto placeholder:text-[19px] placeholder:leading-[22px] placeholder:font-normal" placeholder="Cari..." />
          </div>
        </div>
        <div className="order-3 basis-1/3 box-border">
          <ul className="flex ml-[295px] mt-[-1px]">
            <li className='mr-[15px]'>
              <div className='w-[50px] h-[50px] rounded-full bg-[#F2F3F3] flex justify-center items-center'>
                <svg width="21" height="22" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7.33318 20.6507V17.2872C7.33318 16.4286 8.03766 15.7325 8.90669 15.7325H12.0834C12.5007 15.7325 12.901 15.8963 13.1961 16.1879C13.4911 16.4794 13.6569 16.8749 13.6569 17.2872V20.6507C13.6543 21.0076 13.796 21.3509 14.0505 21.6042C14.3051 21.8575 14.6514 22 15.0127 22H17.18C18.1922 22.0026 19.1639 21.6071 19.8806 20.9009C20.5972 20.1946 21 19.2357 21 18.2356V8.65354C21 7.8457 20.6375 7.07942 20.0104 6.56113L12.6376 0.743456C11.3551 -0.276582 9.51755 -0.243648 8.27333 0.821676L1.0688 6.56113C0.411976 7.06414 0.0193999 7.8327 0 8.65354V18.2258C0 20.3102 1.71026 22 3.81998 22H5.93779C6.6882 22 7.29805 21.4018 7.30349 20.6604L7.33318 20.6507Z" fill="#424242" />
                </svg>
              </div>
            </li>
            <li className='mr-[15px]'>
              <div className='w-[50px] h-[50px] rounded-full bg-[#F2F3F3] flex justify-center items-center'>
                <svg width="25" height="22" viewBox="0 0 25 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M6.79582 0C8.59908 0 10.1245 1.28911 10.6334 3.06401C10.104 3.31802 9.62723 3.67522 9.22357 4.1118C8.38702 5.02148 7.8693 6.27566 7.8693 7.6616C7.8693 7.96324 7.89416 8.26012 7.94096 8.54906C7.57826 8.66495 7.19362 8.72845 6.79582 8.72845C4.57573 8.72845 2.77539 6.77415 2.77539 4.36423C2.77539 1.9543 4.57573 0 6.79582 0Z" fill="#424242" />
                  <path fillRule="evenodd" clipRule="evenodd" d="M0 18.0798C1.69797 18.3989 3.39594 18.5926 5.0939 18.6672V17.4606C5.0939 15.862 5.69646 14.4077 6.6661 13.3552C7.47925 12.4725 8.55273 11.8692 9.74613 11.6978C9.56039 11.5501 9.38636 11.3866 9.22402 11.2104C8.66827 10.6071 8.25291 9.85142 8.03793 9.00684H4.75168C2.13818 9.00684 0 11.3279 0 14.1633V18.0798Z" fill="#424242" />
                  <path fillRule="evenodd" clipRule="evenodd" d="M5.69629 21.3773C10.2271 22.2266 14.758 22.1901 19.2888 21.3773V17.4607C19.2888 14.6238 17.1506 12.3027 14.5371 12.3027H10.448C7.83447 12.3027 5.69629 14.6238 5.69629 17.4607V21.3773Z" fill="#424242" />
                  <path fillRule="evenodd" clipRule="evenodd" d="M25 18.0798C23.3021 18.3989 21.6041 18.5926 19.9061 18.6672V17.4606C19.9061 15.862 19.3036 14.4077 18.3339 13.3552C17.5208 12.4725 16.4473 11.8692 15.2539 11.6978C15.4396 11.5501 15.6137 11.3866 15.776 11.2104C16.3318 10.6071 16.7471 9.85142 16.9621 9.00684H20.2484C22.8619 9.00684 25 11.3279 25 14.1633V18.0798Z" fill="#424242" />
                  <path fillRule="evenodd" clipRule="evenodd" d="M17.8376 0C16.0343 0 14.509 1.28911 14 3.06401C14.5294 3.31802 15.0062 3.67522 15.4099 4.1118C16.2464 5.02148 16.7641 6.27566 16.7641 7.6616C16.7641 7.96324 16.7393 8.26012 16.6925 8.54906C17.0552 8.66495 17.4398 8.72845 17.8376 8.72845C20.0577 8.72845 21.858 6.77415 21.858 4.36423C21.858 1.9543 20.0577 0 17.8376 0Z" fill="#424242" />
                  <path fillRule="evenodd" clipRule="evenodd" d="M12.4931 3.29688C14.7132 3.29688 16.5135 5.25117 16.5135 7.6611C16.5135 10.071 14.7132 12.0253 12.4931 12.0253C10.273 12.0253 8.47266 10.071 8.47266 7.6611C8.47266 5.25117 10.273 3.29688 12.4931 3.29688Z" fill="#424242" />
                  <path fillRule="evenodd" clipRule="evenodd" d="M5.69629 21.3773C10.2271 22.2266 14.758 22.1901 19.2888 21.3773V17.4607C19.2888 14.6238 17.1506 12.3027 14.5371 12.3027H10.448C7.83447 12.3027 5.69629 14.6238 5.69629 17.4607V21.3773Z" fill="#424242" />
                </svg>
              </div>
            </li>
            <li className='mr-[15px]'>
              <div className='w-[50px] h-[50px] rounded-full bg-[#F2F3F3] flex justify-center items-center'>
                <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M15.1552 2.16699C10.2215 -2.14523 2.57138 0.294684 0.873125 6.6902C0.159995 9.3743 0.847988 10.6206 0.847988 12.6351C0.847988 14.7058 0 17.7052 0 17.7052C0 18.0721 0.325712 18.4298 0.726848 18.3255C2.16111 17.9505 4.44221 17.2087 7.17016 17.9494C16.3437 20.4363 22.2305 8.35039 15.1552 2.16699ZM22.3642 23C22.3048 23 22.243 22.992 22.1802 22.9759C14.9277 21.1552 15.4146 23.2007 11.3849 22.1229C10.1655 21.7973 9.05584 21.2102 8.09814 20.4489C15.4169 21.3455 21.5173 14.9695 20.4374 7.46068C21.5425 8.61068 22.3539 10.0347 22.6967 11.6296C23.6727 16.1562 21.1951 15.3903 22.9813 22.2697C23.0865 22.6721 22.7299 23 22.3642 23Z" fill="#424242" />
                </svg>
              </div>
            </li>
            <li className='mr-[15px]'>
              <div className='w-[50px] h-[50px] rounded-full bg-[#F2F3F3] flex justify-center items-center'>
                <svg width="21" height="25" viewBox="0 0 21 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.5 3C6.56497 3 3.375 6.13401 3.375 10C3.375 14.6667 1 19.3333 1 19.3333H20C20 19.3333 17.625 14.6667 17.625 10C17.625 6.13401 14.435 3 10.5 3Z" fill="#424242" />
                  <path d="M1 19.3333L0.108778 18.8798C-0.0489926 19.1898 -0.0343348 19.5595 0.147484 19.856C0.329302 20.1526 0.652156 20.3333 1 20.3333L1 19.3333ZM20 19.3333V20.3333C20.3478 20.3333 20.6707 20.1526 20.8525 19.856C21.0343 19.5595 21.049 19.1898 20.8912 18.8798L20 19.3333ZM4.375 10C4.375 6.7029 7.1005 4 10.5 4V2C6.02945 2 2.375 5.56511 2.375 10H4.375ZM10.5 4C13.8995 4 16.625 6.7029 16.625 10H18.625C18.625 5.56511 14.9706 2 10.5 2V4ZM2.375 10C2.375 12.1794 1.81717 14.3958 1.24052 16.0954C0.954274 16.939 0.668126 17.6417 0.454508 18.1314C0.347809 18.376 0.259514 18.5668 0.198773 18.6946C0.168412 18.7586 0.144963 18.8067 0.129574 18.838C0.121881 18.8536 0.116205 18.865 0.11269 18.872C0.110933 18.8755 0.109716 18.8779 0.109058 18.8792C0.108729 18.8799 0.10854 18.8802 0.108493 18.8803C0.108469 18.8804 0.108481 18.8804 0.108528 18.8803C0.108552 18.8802 0.108615 18.8801 0.108626 18.8801C0.108698 18.8799 0.108778 18.8798 1 19.3333C1.89122 19.7869 1.89132 19.7867 1.89143 19.7865C1.89148 19.7864 1.89159 19.7862 1.89169 19.786C1.89188 19.7856 1.89211 19.7852 1.89237 19.7846C1.8929 19.7836 1.89357 19.7823 1.89438 19.7807C1.89601 19.7774 1.8982 19.7731 1.90094 19.7676C1.90641 19.7567 1.91407 19.7413 1.92377 19.7216C1.94317 19.6822 1.97075 19.6256 2.00533 19.5528C2.07447 19.4072 2.17172 19.1969 2.28768 18.9311C2.51937 18.4 2.82698 17.6443 3.13448 16.738C3.74533 14.9376 4.375 12.4873 4.375 10H2.375ZM1 20.3333H20V18.3333H1V20.3333ZM20 19.3333C20.8912 18.8798 20.8913 18.8799 20.8914 18.8801C20.8914 18.8801 20.8914 18.8802 20.8915 18.8803C20.8915 18.8804 20.8915 18.8804 20.8915 18.8803C20.8915 18.8802 20.8913 18.8799 20.8909 18.8792C20.8903 18.8779 20.8891 18.8755 20.8873 18.872C20.8838 18.865 20.8781 18.8536 20.8704 18.838C20.855 18.8067 20.8316 18.7586 20.8012 18.6946C20.7405 18.5668 20.6522 18.376 20.5455 18.1314C20.3319 17.6417 20.0457 16.939 19.7595 16.0954C19.1828 14.3958 18.625 12.1794 18.625 10H16.625C16.625 12.4873 17.2547 14.9376 17.8655 16.738C18.173 17.6443 18.4806 18.4 18.7123 18.9311C18.8283 19.1969 18.9255 19.4072 18.9947 19.5528C19.0293 19.6256 19.0568 19.6822 19.0762 19.7216C19.0859 19.7413 19.0936 19.7567 19.0991 19.7676C19.1018 19.7731 19.104 19.7774 19.1056 19.7807C19.1064 19.7823 19.1071 19.7836 19.1076 19.7846C19.1079 19.7852 19.1081 19.7856 19.1083 19.786C19.1084 19.7862 19.1085 19.7864 19.1086 19.7865C19.1087 19.7867 19.1088 19.7869 20 19.3333ZM13.0625 20.5C13.0625 21.8641 11.932 23 10.5 23V25C13.003 25 15.0625 23.0019 15.0625 20.5H13.0625ZM10.5 23C9.06801 23 7.9375 21.8641 7.9375 20.5H5.9375C5.9375 23.0019 7.99696 25 10.5 25V23ZM7.9375 20.5V19.3333H5.9375V20.5H7.9375ZM15.0625 20.5V19.3333H13.0625V20.5H15.0625Z" fill="#424244" />
                  <circle cx="14.9783" cy="5.97826" r="5.97826" fill="#FF0202" />
                </svg>
              </div>
            </li>
            <li>
              <div className='w-[50px] h-[50px] rounded-full bg-[#F2F3F3] flex justify-center items-center'>
                <img src={iconpp} alt="" />
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar