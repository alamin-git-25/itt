import { HoverEffect } from "./ui/card-hover-effect";
import icon1 from '../../../public/assets/1.0.png';
import icon2 from '../../../public/assets/2.0.png';
import icon3 from '../../../public/assets/3.0.png';

export function Hover() {
  return (
    <div className="px-10 mt-10">
      <HoverEffect items={services} />
    </div>
  );
}
export const projects = [
  
  {
    title: "Meta",
    description:
      "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
    link: "#",
  },
  {
    title: "Amazon",
    description:
      "A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
    link: "#",
  },
  {
    title: "Microsoft",
    description:
      "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
    link: "#",
  },
];

export const services = [
  {img: icon1, name:'VISA'},
  {img: icon2, name:'AIR TICKET'},
  {img: icon3, name:'HAJJ & UMRAH'}
];