import PropTypes from 'prop-types';

const Section = (props) => {
  return (
    <div className={`flex flex-col gap-8 ${props.color ?? 'text-hfDark'}
        sm:py-44 py-20 flex align-middle justify-center`}>
        <div className='flex flex-col text-center items-center'>
            <h1 className='sm:text-3xl text-[1.1rem] font-bold max-w-[80vw] w-[800px] font-unbounded uppercase tracking-wide'>{props.title}</h1>
            <p className='sm:text-2xl max-w-[80vw] w-[1000px] font-montserrat'>{props.text}</p>
        </div>
        <div className={`flex flex-wrap align-middle justify-center gap-8 ${props.inverted ? 'flex-row-reverse' : 'flex-row'}`}>
            <div className='flex flex-col justify-around max-w-[600px]'>
                {props.children}
            </div>
            <video className="max-w-[90vw] w-[600px] object-cover rounded-2xl shadow-lg" 
            src={props.src} alt="" autoPlay loop muted/>
        </div>
    </div>
  )
}

Section.propTypes = {
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    children: PropTypes.node,
    src: PropTypes.string,
    inverted: PropTypes.bool,
    color: PropTypes.string
  }

export default Section