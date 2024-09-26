
import React from 'react';
import ServiceCard from './ServiceCard';
import icon1 from '../../../public/assets/1.0.png';
import icon2 from '../../../public/assets/2.0.png';
import icon3 from '../../../public/assets/3.0.png';
import { Hover } from './Hov';



const OurService = () => {
    const services = [
        {img: icon1, name:'VISA'},
        {img: icon2, name:'AIR TICKET'},
        {img: icon3, name:'HAJJ & UMRAH'}
    ]
    return (
        <section  className='mt-10 page'>
            <div className="flex w-full items-center justify-center max-w-7xl mx-auto"><div className="flex-grow"><div className="bg-gradient-to-r from-transparent via-indigo-300 to-indigo-700 h-5"></div></div><span className="px-4 text-[2vw] text-white font-semibold ">OUR SERVICE</span><div className="flex-grow"><div className="bg-gradient-to-l from-transparent via-indigo-300 to-indigo-700 h-5"></div></div></div>
            <div>
                <Hover/>
            </div>
{/*             
            <div id='page' className='grid lg:grid-cols-3 grid-cols-1 gap-5 lg:gap-10 px-10 pb-20'>
            {
                services.map((service,index)=><ServiceCard key={index} service={service}/>)
            }
        </div> */}
   
        </section>
    );
};

export default OurService;