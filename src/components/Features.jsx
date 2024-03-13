import { useEffect, useState } from "react";
import { ActionButton } from "./";
const Features = () => {
    const [feats, setFeatures] = useState("gym");

    useEffect(() => {
        setSelected(feats)
    }, [feats])

    const setSelected = (id) => {
        setFeatures(id);
        Array.from(document.getElementsByClassName("feature")).forEach(element => element.classList.remove("selected-ft"));
        document.getElementById(id).classList.add("selected-ft");
    }

    return (
        <section className='bg-transparent sm:py-36 py-20 flex align-middle justify-center '>
            <div className="sct features">
                <div id="titles" className="top-row flex justify-around w-full mb-8">
                    {features.map(ft => (
                        <button key={ft.id} id={ft.id} className="feature header1 text-gray-400 flex-1" onClick={() => setFeatures(ft.id)}>
                            {ft.title}
                        </button>
                    ))}
                </div>
                {
                    features.map(ft => (
                        ft.id === feats && <div key={ft.id} id={`ft-${ft.id}`} className="treinos-ft flex flex-col items-center justify-center gap-8">
                            <div className="sm:h-[600px] h-[400px] w-full relative overflow-hidden flex items-end">
                            <video className="absolute top-0 w-full h-full object-cover rounded-xl -z-10" 
                            src={`./src/assets/${ft.image}`}
                            autoPlay 
                            loop 
                            muted={true}></video>
                            <div className="backdrop-blur-sm bg-[rgba(0,0,0,0.5)] w-full flex items-end justify-space-between p-8 gap-10 flex-grow-0">
                                <p className="paragraph text-align-left">{ft.description}</p>
                                <ActionButton className="">{ft.button}</ActionButton>
                            </div>
                                
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}

export default Features