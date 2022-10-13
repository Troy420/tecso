import React from 'react';
import { wa, hardware } from '../assets';
import styles, { layout } from '../style';
import { IoLogoWhatsapp } from 'react-icons/io';

const Support = () => {
  return (
    <section 
      id="product" 
      className={`${layout.sectionReverse} `}
    >
      <div className={`${layout.sectionImgReverse} relative ${styles.paddingX} supportBackground`}>
        <img src={hardware} alt="hardware" className='w-[100%] relative z-[5]'/>

        <div className='absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient'></div>
        <div className='absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient'></div>
      </div>

      <div className={`${layout.sectionInfo} ${styles.paddingX}`}>
        <h2 className={`${styles.heading2} text-[#112A46]`}>Network Hardware <br className='sm:block hidden'/> Support & Maintenance.</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Whether it's your wireless access point, fiber channel switch, or network director that has reached the end of its initial warranty, PT. bintang informasi teknologi provides world-class optimization, support and network maintenance services like Cisco, Brocade and HPE..</p>

        <div className='flex flex-row flex-wrap sm:mt-6 mt-4'>
          <a href="https://wa.me/628161816821?text=Halo%20IT%20Support%2C%0ASaya%20mendapatkan%20whatsapp%20dari%20website%20bintang%0ABoleh%20saya%20bertanya%3F" target="_blank">
            <IoLogoWhatsapp className='text-[80px] text-[#112A46]' />
          </a>
          
        </div>
      </div>
    </section>
  )
}

export default Support