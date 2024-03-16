const Contact = () => {
    return (
        <div id='contact-form' className="bg-primary flex flex-col items-center justify-center sm:py-44 py-20 px-8 gap-8">
            <h1 className='sm:text-4xl text-[1.4rem] text-start text-hfWhite font-bold font-unbounded uppercase tracking-wide flex flex-wrap justify-start gap-2'>
                <span>Ainda com duvidas?</span><span>Fala connosco!</span>
            </h1>
            <div className="flex sm:flex-row flex-col justify-center items-center gap-10 max-w-[1000px]">
                <div className={`font-montserrat p-4 border rounded-lg shadow sm:p-8 text-hfWhite flex flex-col justify-between bg-gradient-to-r from-hfDark to-hfDarkish w-full
                    `}>
                    <h5 className="text-2xl font-bold grow-0">
                        Contactos:
                    </h5>
                    <ul role="list" className="space-y-5 my-6 grow-0 fel">
                        <li className={`flex items-start`}>
                            <svg className="fill-hfWhite" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M162-120q-18 0-30-12t-12-30v-162q0-13 9-23.5t23-14.5l138-28q14-2 28.5 2.5T342-374l94 94q38-22 72-48.5t65-57.5q33-32 60.5-66.5T681-524l-97-98q-8-8-11-19t-1-27l26-140q2-13 13-22.5t25-9.5h162q18 0 30 12t12 30q0 125-54.5 247T631-329Q531-229 409-174.5T162-120Zm556-480q17-39 26-79t14-81h-88l-18 94 66 66ZM360-244l-66-66-94 20v88q41-3 81-14t79-28Zm358-356ZM360-244Z"/></svg>
                            <div className="ms-2 flex flex-col justify-start">
                                <h5>Telefone:</h5>
                                <span className={`text-base leading-tight text-gray-400`}>
                                    9191919191
                                </span>
                            </div>                            
                        </li>
                        <li className={`flex items-start`}>
                            <svg className="fill-hfWhite" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z"/></svg>
                            <div className="ms-2 flex flex-col justify-start">
                                <h5>Email:</h5>
                                <span className={`text-base leading-tight text-gray-400`}>
                                    geral@hfgym.pt
                                </span>
                            </div>                            
                        </li>
                        <li className={`flex items-start`}>
                            <svg className="fill-hfWhite" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M480-480q33 0 56.5-23.5T560-560q0-33-23.5-56.5T480-640q-33 0-56.5 23.5T400-560q0 33 23.5 56.5T480-480Zm0 294q122-112 181-203.5T720-552q0-109-69.5-178.5T480-800q-101 0-170.5 69.5T240-552q0 71 59 162.5T480-186Zm0 106Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Zm0-480Z"/></svg>
                            <div className="ms-2 flex flex-col justify-start">
                                <h5>Endereço:</h5>
                                <span className={`text-base leading-tight text-gray-400`}>
                                    Complejo desportivo municipal<br />
                                    Av. Manuel Carvalho Cohelo<br />
                                    Vila Nova de Poiares
                                </span>
                            </div>                            
                        </li>
                    </ul>

                    <iframe className="w-full h-[200px] rounded-md grow" src="https://maps.google.com/maps?width=100%25&amp;height=300&amp;hl=en&amp;q=Complexo%20desportivo%20municipal,%20vila%20nova%20de%20poiares+(HF%20Gym)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>

                </div>   
                <div className="flex flex-col w-full text-center items-start">
                    <h5 className="font-montserrat text-hfWhite mb-4 text-2xl font-bold grow-0">
                        Deixa-nos uma mensagem:
                    </h5>
                    <form className="w-full font-montserrat">
                        <div className="mb-5">
                            <input type="name" id="name" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 placeholder-gray-400 shadow-sm-light" placeholder="Teu Nome" autoComplete="on" required />
                        </div>
                        <div className="mb-5">
                            <input type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  placeholder-gray-400  shadow-sm-light" placeholder="Teu Email" autoComplete="on" required />
                        </div>
                        <div className="mb-5">
                            <input type="tel" id="tel" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  placeholder-gray-400  shadow-sm-light" placeholder="Teu Telefone" autoComplete="on" />
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
                        <button type="submit" className="
                        text-hfWhite bg-hfDark ring-2 ring-hfWhite
                        hover:bg-hfDarkish 
                        focus:ring-4 focus:outline-none focus:ring-blue-300 
                        font-medium text-md uppercase rounded-lg px-6 py-3 text-center">Enviar mensagem</button>
                    </form>
                </div>         
            </div>
        </div>
    )
}

export default Contact