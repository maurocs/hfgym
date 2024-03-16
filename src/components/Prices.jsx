import { PriceCard } from "./"
import PriceFeature from './PriceFeature';
const Prices = () => {
  return (
    <section className="bg-hfWhite flex flex-col gap-10 sm:py-44 py-20 items-center justify-center">
        <h1 className='text-hfDark sm:text-4xl text-[1.4rem] font-bold max-w-[85vw] w-[800px] font-unbounded uppercase tracking-wide flex flex-wrap justify-center sm:gap-2 gap-0 leading-8 mb-2 text-center'>
          Os nossos planos
        </h1>
        <div className="flex sm:flex-row flex-col align-middle justify-center gap-8 w-[1300px] max-w-[90vw]">
          <PriceCard title="Plano Profissional" price="35" tier="pro">
            <PriceFeature active>Transito livre nas instalacões</PriceFeature>
            <PriceFeature active>Aulas de grupo ilimitadas</PriceFeature>
            <PriceFeature active>Acompanhamento nutricional</PriceFeature>
            <PriceFeature active>Acompanhamento personalizado</PriceFeature>
          </PriceCard>
          <PriceCard title="Plano Avançado" price="32" tier="advanced">
            <PriceFeature>Transito livre nas instalacões</PriceFeature>
            <PriceFeature>Aulas de grupo ilimitadas</PriceFeature>
            <PriceFeature active>3 entradas por semana nas instalacões (aulas ou ginásio)</PriceFeature>
            <PriceFeature active>Acompanhamento personalizado</PriceFeature>
          </PriceCard>
          <PriceCard title="Plano Básico" price="28" tier="basic">
            <PriceFeature>Transito livre nas instalacões</PriceFeature>
            <PriceFeature>Aulas de grupo ilimitadas</PriceFeature>
            <PriceFeature active>2 entradas por semana nas instalacões (aulas ou ginásio)</PriceFeature>
            <PriceFeature active>Acompanhamento personalizado</PriceFeature>
          </PriceCard>
        </div>
    </section>
  )
}

export default Prices