"use client"
import { quickActions } from '@/data/data'
import MyCalendar from './calendar'
import { Icon } from '@iconify/react';

export default function QuickActions() {
  return (
    <div className='flex flex-col items-center gap-3 '>
      <h1 className='font-bold text-[#404040] text-[15px]'>Quick Actions</h1>
      {quickActions.map((actions, index) => (
        <div key={actions.id} className="actions">
          <div className='relative flex items-center'>
            <select title='#' name="" id="" className='custom-select text-[12px] h-[55px] rounded-md pl-3 bg-[#FAFAFA] w-[200px] text-[#404040] font-bold
           leading-tight outline-none relative pr-6 '
            ><option value="#">{actions.option}</option></select>
            <div className='absolute top-100 right-0 flex '>
           <Icon icon="octicon:chevron-down-24" className='mr-2 bg-secondary text-primary rounded-full p-0.5' />
            </div>
          </div>
          <div className="schedule border mt-3 rounded-md border-[#ECECEC] h-[210px] 
          flex flex-col items-center">
            <div className=' bg-[#F8F8FB] mt-2'>
              <div className="dates  rounded-md gap-2 text-[10px] pt-3 w-[180px]  font-medium items-center justify-center text-center mt-2  ">
                <p className='h-[30px] '>{actions.calendarTitle}</p>
                <div className="misty_taylor text-[10px] mb-2 pb-2 flex gap-2 items-center    justify-center bg-primary pt-2">
                  <input title='#' type="checkbox" className='bg-[#E5E5E5]' />
                  <p>{actions.mistyTaylor}</p>
                  <p>{actions.digits}</p>
                  <p className={`${index === 0 ? 'bg-dimGreen' : 'bg-newYellow'} rounded-full p-1 text-primary`}>{actions.g2}</p>
                  <p className=' cursor-pointer text-[#BFBFBF]'>...</p>
                </div>
                <div className="misty_taylor text-[10px] flex gap-2 mt-2 items-center    justify-center bg-primary pt-2 pb-3">
                  <input title='#' type="checkbox" />
                  <p>{actions.mistyTaylor}</p>
                  <p>{actions.digits}</p>
                  <p className={`${index === 0 ? 'bg-tintBlue' : 'bg-dimRed'} rounded-full p-1 text-primary`}>{actions.g2}</p>
                  <p className=' cursor-pointer text-[#BFBFBF]'>...</p>
                </div>
                <div className='h-[40px]  mb-4 rounded-md'></div>
              </div>
            </div>
          </div>

        </div>
      ))}
      <MyCalendar />
    </div>
  )
}
