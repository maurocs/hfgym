import PropTypes from "prop-types";

const ContactButton = (props) => {
  return (
    <button className={`w-fit border-2 border-${props.color && "hfWhite"} px-6 py-1 rounded-md flex
    items-center justify-center`}>
        <a href="#contacto" className={`text-${props.color && "hfWhite"} font-semibold drop-shadow-sm`}>Contacto</a>
    </button>
  )
}

ContactButton.propTypes = {
  color: PropTypes.string
}
export default ContactButton