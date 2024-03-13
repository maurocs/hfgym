import {Section, SectionItem} from "./"
import { facilities } from "../constants"

const Facilities = () => {
  return (
    <section className='bg-hfDark'>
        <Section title={facilities.title} 
        text={facilities.text} src={facilities.src} color={"text-hfWhite"}>
          {
          facilities.items.map(item => 
            <SectionItem key={item.id} 
            title={item.title} 
            text={item.text}/>)
          }
        </Section>
    </section>
  )
}

export default Facilities