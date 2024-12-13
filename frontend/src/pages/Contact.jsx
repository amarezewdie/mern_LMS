import React from 'react'
import { assets } from '../assets/assets';

const Contact = () => {
  return (
    <div className='flex flex-col mx-4 sm:mx-[10%] w-full'>
      <h1 className='text-2xl self-center mt-14'>CONTACT US</h1>
      <div className='flex flex-col sm:flex-row gap-4 items-center mt-6'>
        <div>
          <img src={assets.contact_image} alt="" className='max-w-[400px] mr-5 p-4' />
        </div>
        <div className='flex flex-col gap-4 items-start'>
          <p>OUR OFFICE</p>
          <p>00000 Amare Station</p>
          <p>Suite 000, ethiopia, DMU</p>
          <p>Tel: (000) 000-0000</p>
          <p>Email: amare@gmail.com</p>
          <p className='text-2xl uppercase'>CAREERS AT PRESCRIPTO</p>
          <p>Learn more about our teams and job openings.</p>
          <button className='items-start border py-3 px-6 border-black capitalize hover:bg-black hover:text-white transition-all '>explore jobs</button>
        </div>
      </div>
    </div>
  );
}

export default Contact
