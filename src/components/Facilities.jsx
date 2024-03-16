import {Section, SectionItem} from "./"
import { facilities } from "../constants"
import PropTypes from 'prop-types'

const Facilities = () => {
  return (
    <section>
      <div className="sm:py-44 py-20 flex flex-col gap-8 justify-center items-center text-hfWhite">
        <Section title={facilities.title} 
          text={facilities.text} src={facilities.src} color={"text-hfWhite"}>
            {
            facilities.items.map(item => 
              <SectionItem key={item.id} 
              title={item.title} 
              text={item.text}/>)
            }
        </Section>
        <div className="flex flex-col text-center items-center">
          <h1 className='sm:text-2xl text-[1rem] font-black max-w-[85vw] w-[800px] font-montserrat uppercase tracking-wide text-center '>
              Horarios
          </h1>
          <p className='sm:text-2xl text-[1rem] max-w-[80vw] w-[1000px] font-montserrat font-medium text-center '><span>
              Segunda - Sexta: 7h a 12h e 13h a 21h
              <br />
              Sabado: 7h a 12h
          </span>
          </p>
        </div>
      </div>
    </section>
  )
}

Facilities.propTypes = {
  color: PropTypes.string
}

export default Facilities