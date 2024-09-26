"use client";
import { motion } from 'framer-motion';
import React from 'react';

const Middle = () => {
    return (
        <section  className='w-full h-[20vh]  flex items-center'>
        <div className='flex overflow-hidden whitespace-nowrap py-5  border-t-[0.1px] border-b-[0.1px]'>
        <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease: 'linear', repeat:Infinity, duration:30}}  className='text-[3vw] font-poppins text-purple-200 leading-none tracking-tighter font-semibold  pl-7'><span className='bg-gradient-to-tr from-purple-400 to-orange-300 bg-clip-text text-transparent'>We  provide  air  tickets,  Hotels  &  Visas  at  lowest  cost  and  with  100%  reliability.  Insha Allah **</span></motion.h1>
        <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease: 'linear', repeat:Infinity, duration:30}}  className='text-[3vw] font-poppins text-purple-200 leading-none tracking-tighter font-semibold  pl-7'><span className='bg-gradient-to-tr from-purple-400 to-orange-300 bg-clip-text text-transparent'>We  provide  air  tickets,  Hotels  &  Visas  at  lowest  cost  and  with  100%  reliability.  Insha Allah **</span></motion.h1>
       
        </div>
        
      </section>
    );
};

export default Middle;

