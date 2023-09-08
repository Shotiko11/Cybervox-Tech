"use client"

import React, { useEffect } from 'react';
import Header from '@/app/homepage/header/Header';
import './maincss.css';
import Body from '@/app/homepage/body/Body';
import Footer from '@/app/homepage/footer/Footer';

const HomePage = () => {
  return (
    <div>
      <Header />
      <Body />
      <Footer />
    </div>
  )
}

export default HomePage