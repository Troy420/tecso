import React from 'react';
import {components} from '../assets';
import styles, {layout} from '../style';
import Button from './Button';

const StorageSupp = () => {
  return (
    <section className={`${layout.section} ${styles.paddingX}`}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>Storage Hardware <br className='sm:block hidden'/> Support.</h2>
        <p className={`${styles.paragraph} max-w-[480px] mt-5`}>Your equipment’s uptime is our top priority. That is why we offer flexible service level agreements to meet your organization’s storage lifecycle management needs as well as live, global call centers available 24 hours a day, 7 days a week.</p>
        <Button styles='mt-10' />
      </div>

      <div className={layout.sectionImg}>
        <img src={components} alt="components" className='w-[100%] h-[100%]'/>
      </div>
    </section>
  )
}

export default StorageSupp