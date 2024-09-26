import Image from 'next/image';
import React from 'react';

const Card = ({card}) => {
    const {img, name,title,bg,color}= card;
    return (
        <div className={`flex lg:my-10 p-5 rounded-[10px]  flex-col overflow-hidden ${bg} rounded shadow-md text-slate-500 shadow-slate-200 sm:flex-row`}>
        {/*  <!-- Image --> */}
        <figure className="flex-1 py-10">
        <Image src={img} width={200} height={200} alt='' className='img'/>
        </figure>
        {/*  <!-- Body--> */}
        <div className="flex-1 p-6 mt-5 w-full sm:mx-6 sm:px-0">
          <header className="flex gap-4 mb-4">
            <div className='w-[300px]'>
              <h4 className={`text-4xl pb-3 font-medium  ${color}`}>
                {name}
              </h4>
            </div>
          </header>
          <p className={`text-2xl font-medium ${color}`}>
            {title}
          </p>
        </div>
      </div>
    );
};

export default Card;