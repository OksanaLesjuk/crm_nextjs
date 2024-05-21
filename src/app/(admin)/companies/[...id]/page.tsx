'use client'
import Header from '../../../components/header';
import React, { useEffect } from 'react';
import { notFound } from 'next/navigation';
export interface PageProps {
  params: { id: string[] };
}

export default function Page({ params }: PageProps) {
  useEffect(()=>{
    const id =  Number.parseInt(params.id);
    if (Number.isNaN(id)){
      notFound()
    }
  })
  return (
    <>
      <Header>Companies ({String(params.id)})</Header>
      <p>{new Date().toTimeString()}</p>
    </>
  );
}
