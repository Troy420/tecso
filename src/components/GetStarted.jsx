import React from 'react';
import styles from '../style';
import { arrowUp } from '../assets';

const GetStarted = () => {
  return (
    <a href="https://wa.me/628161816821?text=Halo%20IT%20Support%2C%0ASaya%20mendapatkan%20whatsapp%20dari%20website%20bintang%0ABoleh%20saya%20bertanya%3F" target="_blank">
      <div className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-discount-gradient p-[2px] cursor-pointer`}>
        <div className={`${styles.flexCenter} flex-col bg-gray-gradient w-[100%] h-[100%] rounded-full`}>
          <div className={`${styles.flexStart} flex-row`}>
            <p className='font-poppins font-medium text-[18px] leading-[23px] mr-2'>
              <span className='text-gradient'>Get</span>
            </p>
            <img src={arrowUp} alt="arrow" className='w-[23px] h-[23px] object-contain' />
          </div>
          <p className='font-poppins font-medium text-[18px] leading-[23px]'>
            <span className='text-gradient'>Started</span>
          </p>
        </div>
      </div>
    </a>
    
  )
}

export default GetStarted