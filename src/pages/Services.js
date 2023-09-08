import Header from '@/app/homepage/header/Header'
import React from 'react'
import "../app/homepage/header/header.css";
import Offering from '@/app/services/servicesoffering/Offering';
import Partners from '@/app/services/partners/Partners';


const Services = () => {
  return (
    <div>
      <Header />
      <Offering />
      <Partners />
    </div>
  )
}

export default Services