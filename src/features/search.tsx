"use client"
import Avatar from '../assets/image/avatar.png'
import Image from 'next/image'
import { Icon } from '@iconify/react';

export default function Search() {
    return (
        <div className=' bg-white h-20 flex justify-between w-[74vw] p-5'>
            <div className="dashboard_text">
                <h2 className=' text-center text-wrap text-secondary text-2xl font-bold leading-7 font-Inter'>Dashboard</h2>
            </div>
            <div className="message_notification_profile flex items-center gap-3">
                <Icon icon="mingcute:message-1-line" />
                <Icon icon="ic:round-notifications-none" />
                <div className='h-3 border-[1px] border-solid text-[rgba(120, 111, 140, 0.4)]'></div>
                <div className="profile flex items-center gap-2">
                    <Image src={Avatar} width={32} height={32} alt="avatar" />
                    <select title='#' name="name" id="#" className='pr-3 font-medium text-[16px] text-[gray] outline-none'><option value="name">Zuzu Jeremy</option></select>
                </div>
            </div>
        </div>
    )
}
