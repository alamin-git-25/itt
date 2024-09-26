import React from 'react';
import img from '../../../public/assets/img.png'
import bg from '../../../public/assets/Vector.png'
import Image from 'next/image';

const About = () => {
    return (
        <section className='  px-20 w-full h-screen flex justify-center' style={{ backgroundImage: `url(/assets/Vector.png)`, backgroundRepeat: `no-repeat`, backgroundSize: `cover` }}>
            <div className="flex flex-col  justify-center items-center rounded shadow-md text-slate-50 sm:flex-row">
                {/*  <!-- Image --> */}
                <figure className="flex-1 ">
                    <Image src={img} width={1000} height={1000} alt='' className=' ' />
                </figure>
                {/*  <!-- Body--> */}
                <div className="flex-1 p-6 mt-20 sm:mx-6 sm:px-0">
                    <div className='flex justify-center  flex-col'>
                        <header className="flex gap-4 mb-4">

                            <div>
                                <p className="text-2xl text-[#E97458] py-2"> the best deals on the world&#39;s best destination</p>
                                <h4 className="text-4xl  text-slate-200">
                                Best travel and destinations <br />
                                We are ready to provide the best trip for you
                                </h4>
                            </div>
                        </header>
                        <p className='text-xl text-white py-2'>
                        With Insaf Tiur And Travels you can experience new travel and the best tourist destinations that we have to offer
                        We have a variety of the world&339;s best destinations that you can choose as your trip destination
                        </p>
                        
                    </div>
                    <button className="inline-flex mt-10 items-center justify-center h-12 gap-2 px-6 text-sm font-medium tracking-wide text-white transition duration-300 rounded focus-visible:outline-none whitespace-nowrap bg-gradient-to-r from-slate-400 to-green-300 hover:bg-emerald-600 focus:bg-emerald-700 disabled:cursor-not-allowed disabled:border-emerald-300 disabled:bg-emerald-300 disabled:shadow-none">
                            <span>GET STARTED</span>
                        </button>
                </div>
            </div>
        </section>
    );
};

export default About;