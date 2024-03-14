
import { ActionButton } from "./";
import { useEffect } from "react";
import { hero } from "../constants";
import {goArrow} from "../../public/assets";
import { heroBackground, heroBackgroundMobile } from "../../public/assets";
import { useMediaQuery } from 'react-responsive'

const Hero = () => {
  const isMobile = useMediaQuery({
    query: "(max-width: 768px)"
  })
  useEffect(() => {
    return () => {
      document.getElementById("heroHeader").parentElement.addEventListener("animationend", () => {
        document.getElementById("heroHeader").parentElement.classList.remove("perspective-3d");
      })
    }
  }, [])
  
  return (
    <section className='hero-background h-[90vh] pt-16' style={{backgroundImage: `${isMobile ? `url(${heroBackgroundMobile})` : `url(${heroBackground})`}`}}>
        <div className="header flex flex-col items-center justify-center 
        text-hfWhite sm:gap-8 gap-8 px-6 perspective-3d">
          <h1 id="heroHeader" className="flex flex-wrap leading-[1.5]
          font-unbounded tracking-wider font-black uppercase justify-center
          sm:text-7xl text-2xl text-center slide-in-bck-center max-w-[1600px]
          ">
            <span>{hero.header1}</span><span className="mx-6">{hero.header_span}</span>
            <span>{hero.header2}</span>
          </h1>
          <h2 className="font-montserrat font-medium text-lg text-center max-w-[500px]">
            {hero.subheader}
          </h2>
          <ActionButton className="action-button">
            
          <h1>Vamos coneçar!</h1>
          <img className="w-5 ml-2 drop-shadow-sm" src={goArrow} alt=""/>
          </ActionButton>
        </div>
    </section>
  )
}

export default Hero