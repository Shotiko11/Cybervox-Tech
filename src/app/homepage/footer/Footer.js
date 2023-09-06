import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <div>
        <footer className="footer">
  <div className="container">
    <div className="footer-content">
      <div className="contact-info">
        <p>Contact Information: +(995) 555-45-59-86</p>
        <p>Address: Ilia Chavchavadze Street N45</p>
      </div>
      <div className="footer-links">
        <a href="/privacy-policy">Privacy Policy</a>
        <a href="https://twitter.com/yourtwitter" target="_blank" rel="noopener noreferrer">Twitter</a>
        <a href="https://www.linkedin.com/in/yourlinkedin" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </div>
    </div>
  </div>
</footer>
    </div>
  )
}

export default Footer
