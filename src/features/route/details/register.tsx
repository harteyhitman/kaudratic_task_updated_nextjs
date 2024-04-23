"use client"

import { registerData } from '@/data/data'
import React from 'react'

export default function Register() {
  return (
    <div className='flex mx-2 my-4 gap-4 mt-10'>
      {registerData.map((register, index) => (
        <div key={register.id} className="register flex flex-col justify-between w-[240px] rounded-md h-[153px] bg-primary">
          <div className="status flex gap-2 m-4">
           <div className={`status_icon  rounded-full h-[41px] w-[41px] items-center justify-center py-[9px] px-[8px] text-primary text-[24px] ${index === 0 &&('bg-secondary')} ${index === 1 &&('bg-dimGreen')} ${index ===2 &&('bg-dimRed')}`}>{register.status}</div> 
            <div className="numbers flex flex-col gap-3">
              <p className='text-[16px] font-[500] font-Inter'>{register.text}</p>
              <h3 className={`text-[24px] font-[700] font-Inter  ${index === 0 &&('text-secondary')} ${index === 1 &&('text-dimGreen')} ${index === 2 &&('text-dimRed')}` }>{register.numbers}</h3>
            </div>

          </div>
          <div className="bars flex justify-between  mx-4 items-center text-secondary mb-4">
            <div className="percent_bars flex gap-10 items-center">
              {register.bars}
              <p className={`${index === 0 ? 'ppp' : ''} ${index === 1 ? 'text-dimGreen':''} ${index === 2 ? 'text-dimRed':''} text-[13px] font-Inter font-bold`}> {register.percent}%</p>
            </div>
            {register.triangle}
          </div>
        </div>
      ))}
    </div>
  )
}
