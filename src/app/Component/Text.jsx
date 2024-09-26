import React from 'react';


const Text = () => {
    return (
        <div>
            <svg viewBox='0 0 800 220' className='w-screen h-[22vh] font-bold font-Carme'>
                <linearGradient id="gr-simple" x1="0" y1="0" x2="100%" y2="100%">
                    <stop stopColor=" rgb(192 132 252)" offset="10%" />
                    <stop stopColor="rgb(253 186 116)" offset="90%" />
                </linearGradient>
                <text x="50%" y="50%" dy=".32em" textAnchor="middle" className='text-[9vw] text-body'>
                    Insaf Tour and Travels
                </text>
            </svg>
        </div>
    );
};

export default Text;