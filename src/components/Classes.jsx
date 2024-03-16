import {Section, SectionItem } from "./"
import { classes } from "../constants"

const Classes = () => {
  return (
    <section className='bg-hfWhite'>
      <div className="sm:py-44 py-20 flex flex-col gap-8 justify-center items-center">
      <Section title={classes.title} 
        text={classes.text} src={classes.src} inverted>
          {
          classes.items.map(item => 
            <SectionItem key={item.id} 
            title={item.title} 
            text={item.text}/>)
          }
        </Section>
      </div>
    </section>
  )
}

export default Classes