import About from "./Component/Aout";
import Banner from "./Component/Banner";
import Middle from "./Component/Middle";
import Othr from "./Component/Othr";
import OurService from "./Component/OurService";
import { Video } from "./Component/ui/video";
import MiddleCard from "./MiddleCard";

export default function Home() {
  return (
  <div className="">
    <Banner/>
    <Middle/>
    <MiddleCard/>
    <OurService/>
    <Othr/>
    <About/>
  </div>
  );
}
