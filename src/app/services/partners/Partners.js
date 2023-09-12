import React from 'react';
import Image from 'next/image';
import './partners.css'

function Partners() {
  const partnersData = [
    { name: 'Partner 1', logo: '/images/microsoft.png' },
    { name: 'Partner 2', logo: '/images/apple.svg' },
    { name: 'Partner 3', logo: '/images/facebook.webp' },
    { name: 'Partner 4', logo: '/images/twitter.png' },
    { name: 'Partner 5', logo: '/images/blackrock.png' },
    { name: 'Partner 6', logo: '/images/insta.webp' },
  ];

  return (
    <div className='containertwo'>
      <h1 className='topic'>Our Partners</h1>
      <div className='partnerContainertwo'>
        {partnersData.map((partner, index) => (
          <div key={index} className='partnerLogotwo'>
            <Image
              src={partner.logo}
              alt={partner.name}
              width={50}
              height={50}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Partners;
