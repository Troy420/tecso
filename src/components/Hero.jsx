import React from 'react'
import styles from '../style';
import { star, server  } from '../assets';
import GetStarted from './GetStarted';

const Hero = () => {
  return (
    <section 
      id="home" 
      className={`flex md:flex-row flex-col`}
    >
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6 py-6`}
      >
        <div
          className='flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2'
        >
          <img src={star} alt="star" className='w-[25px] h-[25px]' />
          <p className={`${styles.paragraphLight} ml-5 text-primary`}>
            HPE RPB Genuine Parts Distributor
          </p>
        </div>

        <div
          className="flex flex-row justify-between items-center w-full"
        >
          <h1 className='flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-heroTxtColor ss:leading-[100px] leading-[75px]'>
            Third Party <br className="sm:block hidden" /> {" "}
            <span className='text-gradient'>Server</span> {" "}
          </h1>
          <div className='ss:flex hidden md:mr-20 mr-0'>
            <GetStarted/>
          </div>
        </div>

        <h1 className='font-poppins font-semibold ss:text-[68px] text-[52px] text-heroTxtColor ss:leading-[100px] leading-[75px] w-full'>
          Maintenance.
        </h1>

        <p className={`${styles.paragraphLight} max-w-[470px] mt-5`}>
          Multi-vendor support for storage, server, and networking hardware. You will receive the attention you need to keep your server equipment up and running. Along with third party server maintenance.
        </p>
      </div>
      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <img src={server} alt="server" className='w-[100%] h-[100%] relative z-[5]' />
        <div className='absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient' />
        <div className='absolute z-[1] w-[80%] h-[80%] rounded-full bottom-40 white__gradient' />
        <div className='absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient' />
      </div>

      <div className={`ss:hidden ${styles.flexCenter} py-6`}>
        <GetStarted />
      </div>
    </section>
  )
}

export default Hero