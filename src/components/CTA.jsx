import React from 'react';
import styles from '../style';
import Button from './Button';

const CTA = () => {
  return (
    <section className={`${styles.flexCenter} ${styles.marginY} ${styles.paddingX} sm:flex-row flex-col rounded-[20px]`}>
      <div className='flex-1 flex flex-col'>
        <h2 className={`${styles.heading3} ${styles.paragraphDark}`}>Let's try our service now!</h2>
        <p className={`${styles.paragraphDark} max-w-[470px] mt-5`}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore repudiandae ab, consequatur pariatur tempore corrupti.</p>
      </div>

      <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
        <Button />
      </div>
    </section>
  )
}

export default CTA