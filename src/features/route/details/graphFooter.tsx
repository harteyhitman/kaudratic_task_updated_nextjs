"use client"
import { Icon } from '@iconify/react';



export default function GraphFooter() {
  return (
    <div className='w-[100%] h-[59px] flex justify-center items-center bg-secondary rounded-md text-primary gap-3 font-Inter text-[20px] mt-5 text-bold'><Icon icon="carbon:report" className='h-[28px] w-[22px]' /><p>Generate Report</p></div>
  )
}
