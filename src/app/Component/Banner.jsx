"use client";
import React from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import Text from './Text';
import Video from 'next-video';
import vid from '../../../public/videos/mp.mp4';


const Banner = () => {
    useGSAP(()=>{
        gsap.from('.t',{
            opacity:0,
            y:100,
            duration:1.5,
            delay:1,
            stagger:1
        }),
        gsap.from('.g',{
            opacity:0,
            y:100,
            duration:1,
            delay:2,
        })    
        gsap.from('.ps',{
            opacity:0,
            y:100,
            duration:1.7,
            delay:.3,
            stagger:1
        })    
    })
    return (
        <section className='w-full custom h-[100vh] ' >

            <div className='flex flex-col justify-center items-center  w-full h-full'>
                <div className='mb-60 pt-20'>
                    <Text/>
                    <h3 className='lg:text-[5vw]  t  text-center font-semibold  font-poppins text-transparent bg-clip-text bg-gradient-to-tl from-fuchsia-500 to-cyan-100'>Your Trasted Travel Partner</h3>
    
                </div>
                
               <div className='lg:flex justify-between w-full px-20  pt-4  lg:visible hidden'>
                <p className='text-xl ps text-blue-300 font-custom uppercase   bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] transition-colors border-slate-800 animate-shimmer px-6 py-4 rounded-full'>Affordable prices</p>
                <p className='text-xl ps text-blue-300 font-custom uppercase   bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] transition-colors border-slate-800 animate-shimmer px-6 py-4 rounded-full'>Unforgettable experience</p>
                <p className='text-xl ps text-blue-300 font-custom uppercase   bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] transition-colors border-slate-800 animate-shimmer px-6 py-4 rounded-full'>Very Friendly Service</p>
               </div>
            </div>
            
        </section>
    );
};

export default Banner;