import { useMediaQuery } from 'react-responsive'
const Contact = () => {
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' })
  return (
    <div id='contact-form' className="bg-primary flex sm:flex-row flex-col items-center justify-center sm:pt-44 pt-20 px-8">
        <div className="flex flex-col text-center items-start max-w-[460px] sm:pb-44 ">
            <h1 className='sm:text-4xl text-[1.4rem] text-start text-hfWhite font-bold font-unbounded uppercase tracking-wide flex flex-wrap justify-start mb-8'>
                <span>Ainda com duvidas?</span><span>Fala connosco!</span>
            </h1>
            <form className="w-full font-montserrat">
                <div className="mb-5">
                    <input type="name" id="name" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 placeholder-gray-400 shadow-sm-light" placeholder="Teu Nome" autoComplete="on" required />
                </div>
                <div className="mb-5">
                    <input type="text" id="text" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  placeholder-gray-400  shadow-sm-light" placeholder="Teu Email" autoComplete="on" required />
                </div>
                <div className="mb-5 text-start">
                    <label htmlFor="message" className="block mb-2 text-md font-medium text-gray-900 dark:text-white">Como te podemos ajudar?</label>
                    <textarea id="message" rows="4" className="block p-2.5 w-full text-md text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="A tua mensagem..."></textarea>
                </div>
                <div className="flex items-start mb-5 px-6">
                    <div className="flex items-center h-5">
                    <input id="terms" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300  ring-offset-gray-800 focus:ring-offset-gray-800" required />
                    </div>
                    <label htmlFor="terms" className="ms-2 text-sm font-medium text-justify text-gray-900">Ao enviar este formulário, concordas com o uso dos teus dados de acordo com a nossa <a href="#" className="hover:underline text-blue-600">Política de Privacidade</a>.</label>
                </div>
                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Enviar mensagem</button>
            </form>
        </div>
        <div>
            <img className="sm:h-[750px] sm:w-full w-[300px] sm:aspect-square object-top object-cover" src={isMobile?`assets/pointingUp.png`:`assets/pointingSide.png`} alt="" />
        </div>
    </div>
  )
}

export default Contact