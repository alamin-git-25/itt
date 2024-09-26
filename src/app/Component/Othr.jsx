import Image from 'next/image';
import React from 'react';
import img from '../../../public/assets/img.jpg'
import { Glov } from './Golv';
import icon1 from '../../../public/assets/Group 4257.png';
import icon2 from '../../../public/assets/Group 444.png';
import icon3 from '../../../public/assets/Group 4444.png';

const Othr = () => {
  return (
    <div className='  w-full h-[100vh] oth relative'>


      <div className="sm:flex   rounded  sm:flex-row">
        {/*  <!-- Image --> */}
        <figure className="flex justify-center items-center ">
          <Glov />
          <div className='w-[full] lg:w-[650px] rounded-md h-[218px] bg-white/25 absolute top-[10%] lg:right-24'>
            <div className='flex justify-between items-center w-full h-full px-6'>
              <Image src={icon1} width={100} height={100} alt='' className='bg-white mr-5 rounded-full border' />
              <div>
                <h3 className='text-3xl text-white pb-5'>Affordable prices</h3>
                <p className='text-xl text-white'>We provide some very affordable prices compared to others.</p>
              </div>
            </div>
          </div>
          <div className='w-[full] lg:w-[650px] rounded-md h-[218px] bg-white/25 absolute top-[40%]  lg:right-24'>
            <div className='flex justify-between items-center w-full h-full px-6'>
              <Image src={icon2} width={100} height={100} alt='' className='bg-white mr-5 rounded-full border' />
              <div>
                <h3 className='text-3xl text-white pb-5'>Unforgettable experience</h3>
                <p className='text-xl text-white'>We provide a vacation experience that will be unforgettable</p>
              </div>
            </div>
          </div>
          <div className='w-[full] lg:w-[650px] rounded-md h-[218px] bg-white/25 absolute top-[70%]  lg:right-24'>
            <div className='flex justify-between items-center w-full h-full px-6'>
              <Image src={icon3} width={100} height={100} alt='' className='bg-white mr-5 rounded-full border' />
              <div>
                <h3 className='text-3xl text-white pb-5'>Very Friendly Service</h3>
                <p className='text-xl text-white '>We will provide excellent and friendly service for the sake of  our customers.</p>
              </div>
            </div>
          </div>
        </figure>
        {/*  <!-- Body--> */}

      </div>
    </div>

  );
};

export default Othr;