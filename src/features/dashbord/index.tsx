import React from 'react';
import Layout from '@/components/layout/index';
// import{ LayoutProps} from '@/components/layout/index';
import Search from '../search';
import Details from '../details';
 
interface LayoutProps {}


const Dashboard = () => {
  const layoutProps: LayoutProps = { children: (
    <div className='flex flex-col bg-[#F4F4F4]'>
      <Search />
      <Details />
    </div>
  )};

  return (
    <Layout {...layoutProps} />
  );
}

export default Dashboard;
