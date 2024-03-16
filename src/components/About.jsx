import { about } from "../constants"
import { aboutBackground, aboutBackgroundMobile } from "../../public/assets"
import { useMediaQuery } from 'react-responsive'

const About = () => {
  const isMobile = useMediaQuery({
    query: '(max-width: 768px)'
  })

  return (
    <section className='about-background' style={{backgroundImage: `${isMobile ? `url(${aboutBackgroundMobile})` : `url(${aboutBackground})`}`}} id='about-background'>
      <div className={`flex flex-col gap-8 text-hfWhite sm:py-44 py-20 align-middle justify-center`}>
        <div className='flex flex-col text-center items-center gap-6'>
            <h1 className='sm:text-4xl text-[1.4rem] font-bold max-w-[85vw] w-[800px] font-unbounded uppercase tracking-wide'>
              {about.title}<span className="underline">{about.title_span}</span>
            </h1>
            <p className='sm:text-2xl max-w-[80vw] w-[1000px] font-montserrat font-medium'><span>
            {about.text}
            </span>
            </p>
        </div>
    </div>
    </section>
  )
}

export default About