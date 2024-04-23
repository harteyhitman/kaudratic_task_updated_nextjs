"use client"
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { Icon } from '@iconify/react';

function MyCalendar() {
    const [date, setDate] = useState(new Date());

    const onChange = (date: any) => {
        setDate(date);
    }

    return (
        <div className='flex flex-col items-center'>
            <div className="view_point flex items-center bg-[#F8F8FB] cursor-pointer">
                <p className='text-[12px] font-[600] font-Inter w-[180px] py-4 px-2 align-center border-l-[6px] border-secondary rounded-lg'>View Reports</p>
                <Icon icon="maki:arrow" className='rounded-full bg-secondary  p-1 mr-2 text-primary'/>
            </div>
            <div className='w-[230px] text-[12px] p-2 rounded-md'>
                <Calendar
                    onChange={onChange}
                    value={date}
                    className={`text-[12px] text-[#2E2E48] w-[100%] border-[rgba(236, 236, 236, 1)] p-2 rounded-md`}
                />
            </div>
        </div>

    );
}

export default MyCalendar;
