import { atletas } from "../constants/atletas"
import { Athlete } from "./";
import Marquee from "react-fast-marquee";

const Athletes = () => {

    const shuffled = atletas
    .map(value => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value)

  return (
    <div className="flex flex-col sm:py-44 py-20 items-center justify-center overflow-scroll">
        <h1 className='text-hfWhite sm:text-4xl text-[1.4rem] font-bold max-w-[85vw] w-[800px] font-unbounded uppercase tracking-wide flex flex-wrap justify-center sm:gap-2 gap-0 leading-8 mb-2 text-center'>
            <span>Conhece as</span>
            <span>historias dos</span>
            <span className="underline">nossos atletas HF</span>
        </h1>
        <Marquee speed={30} pauseOnClick>
        {
            shuffled.map((atleta) => {
                return <Athlete key={atleta.nome} src={`assets/athletes/${atleta.nome}.png`} name={atleta.nome} text={atleta.testemunha} since={atleta.desde} socials={atleta.redes}></Athlete>
            })
        }
        
        </Marquee>
    </div>
  )
}

export default Athletes