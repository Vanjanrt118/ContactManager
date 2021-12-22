import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
const Header = ({branding}) => {
    return (
        <nav className="navbar navbar-dark bg-danger mb-3 py-0">
            <p className="container">
            <a href="/" className="navbar-brand">{branding}</a>
            </p>
           <ul className="navbar-nav list-group list-group-horizontal ">
               <li className="nav-item" style={{paddingRight:8}}>
                   <Link to="/" className="nav-link">Home</Link>
               </li>
               <li className="nav-item"> 
                   <Link to="/add" className="nav-link">Add contact</Link>
               </li>
           </ul> 
        </nav>
    )
}
Header.defaultProps={
    branding:"My App"
}
Header.prototypes={
    branding:PropTypes.string.isRequired
}
export default Header
