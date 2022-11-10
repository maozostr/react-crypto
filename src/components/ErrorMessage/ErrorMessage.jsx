import "./ErrorMessage.css"
import PropTypes from 'prop-types';


export default function ErrorMessage({ message }) {
   if (!message) return null
   return (
      <h3 className="error_message">{message}</h3>
   )
}

ErrorMessage.propTypes = {
   message: PropTypes.string
}