import Header from '@/app/homepage/header/Header'
import React from 'react'
import "../app/homepage/header/header.css";
import Offering from '@/app/services/servicesoffering/Offering';


const Services = () => {
  return (
    <div>
      <Header />
      <Offering />
    </div>
  )
}

export default Services