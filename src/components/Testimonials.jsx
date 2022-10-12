import React from 'react';
import {feedback} from '../constants';
import styles from '../style';
import FeedbackCard from './FeedbackCard';

const Testimonials = () => {
  return (
    <section id="clients" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative testimoHeaderBackground`}>
      <div className='absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient' />

      <div className='w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]'>
        <h1 className={`${styles.heading2} text-testimoTxtColor ${styles.paddingX}`}>What people are <br className='sm:block hidden text-testimoTxtColor'/> saying about us</h1>
        <div className={`w-full md:mt-0 mt-6 ${styles.paddingX}`}>
          <p className={`${styles.paragraph} text-left max-w-[450px] text-primary bg-blue-gradient-2 p-10 rounded-[10px]`}>Some of the best ways you can truly learn about a company is not by what they say about themselves, but rather what their clients say about them. And it's no different for us. The long term relationships we develop with our clients mean everything to us. And here's what a few of them have to say...</p>
        </div>
      </div>

      {/* <div className='flex flex-wrap sm:justify-around justify-center w-full feedback-container relative z-[1]'>
        {feedback.map((card) => {
          return (
            <FeedbackCard 
              key={card.id}
              {...card}
            />
          )
        })}
      </div> */}
    </section>
  )
}

export default Testimonials