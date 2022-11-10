import PropTypes from 'prop-types';
import { Link, useLocation } from "react-router-dom"
import "./MyLink.css"


export default function MyLink({ to, children }) {
   const location = useLocation()

   return (
      <Link className="my_link" to={to} style={{ color: location.pathname === to ? "crimson" : "" }} >
         {children}
      </Link>
   )
}


MyLink.propTypes = {
   to: PropTypes.string.isRequired,
}