import React from 'react'

const Button = ({ styles }) => {
  return (
    <button 
      type='button' 
      className={`py-4 px-6 bg-discount-gradient font-poppins font-medium text-[18px] outline-none ${styles} rounded-[10px]`}
    >
      <span className="text-white">Get Started</span>
    </button>
  )
}

export default Button