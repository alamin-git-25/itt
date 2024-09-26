import React from 'react';
import icon1 from '../../public/assets/clock.svg'
import icon2 from '../../public/assets/marker.svg'
import icon3 from '../../public/assets/phone.svg'
import Card from './Card';


const MiddleCard = () => {
    const icon = [
        {img: icon1, color:'text-[#3A4256]', bg:'bg-gradient-to-r from-slate-400 to-green-300', name:'Opening Hours', title:'24/7'},
        {img: icon2,color:'text-[#C7FFF0]', bg:'bg-gradient-to-r from-slate-400 to-cyan-800', name:'Visit our location', title:'24-25 Dilkusha C/A (4th floor), Motijheel Dhaka-1000., Dhaka, Bangladesh'},
        {img: icon3,color:'text-[#3A4256]', bg:'bg-gradient-to-r from-slate-400 to-green-300', name:'Contact us now', title:'+8801646-928510'}
    ]
    return (
       <div className='grid lg:grid-cols-3 grid-cols-1 gap-5 lg:gap-10 px-10'>
         {
             icon.map((card, index) =><Card key={index} card={card}></Card>)
         }
       </div>
)};

export default MiddleCard;