import React from 'react';
import styles from '../style';
import Button from './Button';

const CTA = () => {
  return (
    <section className={`${styles.flexCenter} ${styles.marginY} ${styles.paddingX} sm:flex-row flex-col rounded-[20px]`}>
      <div className='flex-1 flex flex-col'>
        <h2 className={`${styles.heading2}`}>Let's try our service now!</h2>
        <p className={`${styles.paragraphDark} max-w-[470px] mt-5`}>We believe that all services and products we offer are connected. Whether we are supplying pre-owned IT hardware or providing Cloud Service, Our solutions will reduce the cost of your IT infrastructure without sacrificing its efficiency.</p>
      </div>

      <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
        <Button />
      </div>
    </section>
  )
}

export default CTA