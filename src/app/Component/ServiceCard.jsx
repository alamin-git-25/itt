

import Image from 'next/image';
import React from 'react';

const ServiceCard = ({ service }) => {

   
    const { img, name, title } = service;
    return (
        <section className='' >
            <div id='card' className="overflow-hidden box  bg-gradient-to-r from-blue-600 to-purple-300 flex flex-col  justify-center items-center my-10 lg:h-[410px]  rounded-lg    transition-colors duration-500">
                {/*  <!-- Image --> */}
                <figure>
                    <Image src={img} width={450} height={450} alt='' className='img' />
                </figure>
                {/*  <!-- Body--> */}
                <div className="p-6">
                    <header className="mb-4">
                        <h4 className="text-[3vw] text-center font-medium text-slate-200">
                            {name}
                        </h4>
                    </header>
                </div>
            </div>
        </section>
    );
};

export default ServiceCard;