import { PropTypes } from "prop-types"

const ActionButton = (props) => {
  return (
    <button type="button" className="font-montserrat action-button text-hfWhite
    bg-gradient-to-r from-primary to-orange-500 hover:bg-gradient-to-bl
    active:ring-4 active:outline-none active:ring-red-orange-500 
    dark:active:ring-orange-700 uppercase shadow-md font-bold" onClick={props.onClick}>
    {props.children}
    </button>
  )
}

ActionButton.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func
}

export default ActionButton