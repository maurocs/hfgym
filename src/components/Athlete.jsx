import PropTypes from 'prop-types';

const Athlete = (props) => {

    Array.prototype.random = function () {
        return this[Math.floor((Math.random()*this.length))];
    }

    const rotation = ['-rotate-2', '-rotate-3', '-rotate-6','rotate-2', 'rotate-3', 'rotate-6',].random()
    const photoClass = `flex flex-col gap-4 items-center justify-center w-[340px] max-w-[80vw] bg-hfWhite p-4 flex align-middle justify-center rounded-sm shadow-md ${rotation}`

    return (
        <div className="flex sm:flex-row flex-col gap-14 text-hfDark py-10 items-center justify-center mx-20">
            <div>
                <div className={photoClass}>
                    <img src={props.src} alt={props.name} className="aspect-square object-cover"/>
                    <h1 className='py-2 leading-6 font-bold text-xl text-center'>{props.name}<span className='text-sm opacity-60'> | Atleta HF desde {props.since}</span></h1>
                </div>
            </div>
            <div className={`text-hfWhite flex flex-col text-center items-center font-montserrat max-w-[90vw]`}>
                <q className='italic font-medium w-[340px] max-w-[80vw] sm:text-lg text-[0.8rem] opacity-90'>{props.text}</q>
                <div className=' w-[340px] max-w-[80vw]'>
                    <a href=""><img src="" alt="" /></a>
                    <a href=""><img src="" alt="" /></a>
                    <a href=""><img src="" alt="" /></a>
                    <a href=""><img src="" alt="" /></a>
                </div>
            </div>
        </div>
    )
}

Athlete.propTypes = {
    src: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    since: PropTypes.string.isRequired
}

export default Athlete