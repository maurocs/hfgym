import {Section, SectionItem } from "./"
import { classes } from "../constants"

const Classes = () => {
  return (
    <section className='bg-hfWhite'>
        <Section title={classes.title} 
        text={classes.text} src={classes.src} inverted>
          {
          classes.items.map(item => 
            <SectionItem key={item.id} 
            title={item.title} 
            text={item.text}/>)
          }
        </Section>
    </section>
  )
}

export default Classes