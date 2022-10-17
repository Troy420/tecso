import React from 'react';
import styles from '../style';
import {logoBintang} from '../assets';
import {footerLinks, socialMedia} from '../constants';

const Footer = () => {
  return (
    <section className={`${styles.flexCenter} ${styles.padding} flex-col`}>
      <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
        <div className='flex-1 flex flex-col justify-start mr-10'>
          <img src={logoBintang} alt="IT Support" className='w-[200px] object-contain' />
            <p className={`${styles.paragraph} mt-4 max-w-[310px]`}>
            As a Partner, Your Goals are Our Goals.
          </p>
        </div>
        <div className='flex-[1.5] w-full flex flex-row justify-end flex-wrap md:mt-0 mt-10'>
          {footerLinks.map((footerLink, index) => {
            return (
              <div key={index} className="flex flex-col ss:my-0 my-4 min-w-[150px]">
                <h4 className='font-poppins foint-medium text-[18px] leading-[27px] text-russianBlack'>
                  {footerLink.title}
                </h4>
                <ul className='list-none mt-4'>
                  {footerLink.details.map((detail, index) => {
                    return (
                      <li key={index} className={`flex flex-col font-poppins font-normal text-[16px] leading-[24px] text-russianBlack ${index !== footerLink.details.length - 1 ? 'mb-4' : 'mb-0'}`}
                      >
                        <p>{detail.name}</p>
                        <p>{detail.detail}</p>
                      </li>
                    )
                  })}
                </ul>
              </div>
            )
          })}
        </div>
      </div>

      <div className='w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]'>
        <p className='font-poppins foint-normal text-center text-[18px] leading-[27px] text-russianBlack'>
        <span id="copyright">
          {new Date().getFullYear()} {" "}
        </span> 
        IT Support. All Rights Reserved.
        </p>
        <div className='flex flex-row md:mt-0 mt-6'>
          {socialMedia.map((social, index) => {
            return (
              <a href={social.link} target="_blank">
                <img key={social.id} src={social.icon} alt={social.id} className={`w-[100px] h-[100px] object-contain cursor-pointer ${index !== socialMedia.length - 1 ? 'mr-6' : 'mr-0' }`} />
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Footer 