import { PropTypes } from "prop-types"

const ActionButton = (props) => {
  return (
    <button type="button" className={`font-montserrat ${props.margin ?? ''} py-4 px-6 rounded-lg text-hfWhite
    bg-gradient-to-r from-primary to-orange-500 hover:bg-gradient-to-bl
    active:ring-4 active:outline-none active:ring-orange-700 uppercase shadow-md font-bold flex justify-center items-center`} onClick={props.onClick}>
    {props.children}
    </button>
  )
}

ActionButton.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
  margin: PropTypes.string
}

export default ActionButton