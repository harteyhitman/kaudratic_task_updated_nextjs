"use client"

import React, { useState } from 'react';
import Image from 'next/image';
import Logo from '../../assets/image/logo.png';
import { dashboardBtn } from '../../data/data';
import { Icon } from '@iconify/react';
import Buttons from '../../components/buttons';
import { useRouter } from 'next/navigation';
import Layout from './initial-layout';
import TeddyedLogo from '../../assets/image/teddyed_logo.png';

interface IDashboardButton {
  id: string;
  ButtonIcon: JSX.Element;
  name: string;

}

const Dashboard: React.FC = ({ children }: React.PropsWithChildren<{}>) => {
  const [selectBtn, setSelectBtn] = useState<number | null>(null);
  const router = useRouter();

  const dashboardClick = (index: number) => {
    router.push('/dashboard');
    setSelectBtn(selectBtn === index ? null : index);
  };

  return (
    <Layout>
      <div className="bg-secondary w-41">
        <div>
          <div className="logo_app flex justify-center items-center p-11">
            <Image
              src={Logo}
              width={116}
              height={80}
              alt="logo"
            />
          </div>
          <div className="side_buttons flex flex-col gap-4 p-5">
            {dashboardBtn.map((board: IDashboardButton, index: number) => (
              <div
                onClick={() => dashboardClick(index) }
                key={board.id}
                className={` 
                  flex gap-4 pl-4 items-center hover:bg-primary  w-48 h-11 rounded-lg`}
              >
                <div className={`${
                  selectBtn === index ? 'text-secondary' : ''
                }text-primary text-lg font-semibold hover:text-secondary cursor-pointer`}>{board.ButtonIcon}</div>
                <h2 className={`${
                  selectBtn === index ? 'text-secondary' : ''
                } text-primary text-lg font-semibold hover:text-secondary cursor-pointer`}>{board.name}</h2>
              </div>
            ))}
          </div>
          <div className="message pl-3 mt-[200px] flex gap-3 flex-col">
            <div className='flex relative items-center gap-[30px]'>
              <Buttons label='Messages' className='bg-[#fff] text-secondary font-[600] rounded-md w-52 h-11  text-left pl-2' />
              <button className='notification absolute'>Notifications</button>
            </div>
            <Buttons icon={<Icon icon="iconoir:log-in" className=' text-xl' />} label='Log Out' className='bg-[#FF4159] text-lg text-primary font-[Inter] font-[600] rounded-md w-52 h-11 text-left text-[14px] pl-3 items-center flex gap-4' />
            <div className="teddyed_logo flex justify-center items-center mt-[100px] mb-4">
              <Image
                className=''
                src={TeddyedLogo}
                width={100}
                height={37}
                alt="teddyed"
              />
            </div>
          </div>
        </div>
      </div>
      {children}
    </Layout>
  );
};

export default Dashboard;
