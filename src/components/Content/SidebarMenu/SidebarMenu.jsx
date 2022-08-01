import React from 'react'
import SidebarList from './SidebarList'

const SidebarMenu = () => {
    return (
        <div className='w-[400px] h-[310px] overflow-y-auto flex justify-center items-center'>
            <SidebarList />
        </div>
    )
}

export default SidebarMenu