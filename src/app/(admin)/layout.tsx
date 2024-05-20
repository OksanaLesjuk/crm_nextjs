import Sidebar from '@/app/components/sidebar';
import React from 'react'

export interface LayputProps{
children: React.ReactNode;
}

export default function Layout({children}:LayputProps) {
  return (
    <>
      <Sidebar/>
      <div className='ml-60'>{children}</div>
    </>
  )
}
