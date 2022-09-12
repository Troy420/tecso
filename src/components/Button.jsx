import React from 'react'

const Button = ({ styles }) => {
  return (
    <button 
      type='button' 
      className={`py-4 px-6 bg-discount-gradient font-poppins font-medium text-[18px] outline-none ${styles} rounded-[10px]`}
    >
      <a href="https://wa.me/628161816821?text=Halo%20IT%20Support%2C%0ASaya%20mendapatkan%20whatsapp%20dari%20website%20bintang%0ABoleh%20saya%20bertanya%3F" target="_blank">
        <span className="text-white">Contact Us</span>
      </a>
    </button>
  )
}

export default Button