import PropTypes from 'prop-types';

const SectionItem = (props) => {
    return (
        <div className={`flex flex-col text-center items-center font-montserrat max-w-[90vw]`}>
            <h1 className='font-bold text-xl'>{props.title}</h1>
            <p className='font-medium sm:text-lg text-[0.8rem] opacity-90'>{props.text}</p>
        </div>
    )
}

SectionItem.propTypes = {
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
};

export default SectionItem;