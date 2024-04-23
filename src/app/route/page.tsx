import Layout from '@/components/layout/initial-layout'
import Details from '@/features/details'
import Search from '@/features/search'
import React from 'react'


export default function Page() {
  return (
    <div className=' flex'>
        <Layout>
        <Search />
      <Details />
        </Layout>
    </div>
  )
}
