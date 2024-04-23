"use client"
import { Reports } from '@/data/data';
import { Icon } from '@iconify/react';

export default function GenerateReports() {
  return (
    <div className=' flex flex-1  mx-1 '>
      <div className="search_elements relative flex">
        <Icon icon="iconoir:search" className='absolute w-[23px] h-[23px] text-secondary ml-2 mt-3' />
        <input title='#' type="search" className='h-[43px] w-[70px] px-2' />
      </div>
      <div className='flex flex-row  justify-center gap-2 bg-primary h-[43px] cursor-pointer '>
        {Reports.map((report, index) => (
          <div key={report.id} className={`report_container  flex items-center h-[43px] p-1 bg-primary 
          ${index === 0 ? 'first_report' : ''}
          ${index === 1 ? 'second_report' : ''}
          `}>
            <div className="icons text-[#666666]">
              {report.reportIcon}
            </div>
            <select title='#' name="report" id="report" className='p-1 font-Inter text-sm text-[#666666] font-semibold cursor-pointer outline-none'>
              <option value="report" className='grade'>
                {report.main}
              </option>
            </select>
          </div>
        ))}
      </div>
    </div>
  )
}
