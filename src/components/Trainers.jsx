import {trainers} from "../constants"
const Trainers = () => {
    return (
        <section className='bg-hfWhite sm:py-32 py-14'>
            <div className="flex flex-col justify-center items-center w-full">
                <div className="flex flex-row justify-center items-end z-9">
                    {
                        trainers.items.map((trainer) => 
                        <img key={trainer.id} className={`object-cover ${trainer.id === "item_2" ? " sm:h-[500px] h-[170px] sm:-mx-[100px] -mx-[85px] z-10" : "object-cover sm:h-[450px] h-[150px] z-8"} drop-shadow-md`} src={trainer.src} alt={trainer.name} />
                        )
                    }
                </div>
                <div className="flex flex-col items-center justify-center text-center p-16 max-w-[90vw] bg-gradient-to-b from-orange-400 to-orange-500 rounded-2xl shadow-lg text-hfWhite relative z-20 gap-6">
                    <h1 className='sm:text-4xl text-[1.4rem] font-bold max-w-[85vw] w-[800px] font-unbounded uppercase tracking-wide flex flex-wrap justify-center gap-2 leading-4 mb-2'>
                        <span>Conhece a </span><span>familia HF</span>
                    </h1>
                    <p className='sm:text-2xl max-w-[80vw] w-[1200px] font-montserrat font-medium'><span>
                        {trainers.text}
                    </span>
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Trainers