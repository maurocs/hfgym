import { closing } from "../constants"

const Closing = () => {

  return (
    <section className='bg-hfDark' id='closing-background'>
      <div className={`flex flex-col gap-8 text-hfWhite sm:py-20 py-10 align-middle justify-center`}>
        <div className='flex flex-col text-center items-center gap-6'>
            <h1 className='sm:text-4xl text-[1.4rem] font-bold max-w-[85vw] w-[800px] font-unbounded uppercase tracking-wide'>
              {closing.title}<span className="underline">{closing.title_span}</span>
            </h1>
            <p className='sm:text-2xl max-w-[80vw] w-[1000px] font-montserrat font-medium'><span>
            {closing.text}
            </span>
            </p>
        </div>
    </div>
    </section>
  )
}

export default Closing