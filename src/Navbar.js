import {Link} from "react-router-dom"
function Navbar(){
    return(
        <nav className="nav">
        <Link to="/Home" className="site_title">
            Fruit n Veg
        </Link>
        <ul>
            <CustomLink to="/Basket">Basket</CustomLink>
            <CustomLink to="/Produce">Produce</CustomLink>
            <CustomLink to="/InfoPage">Information</CustomLink>
        </ul>
    </nav>
    )
}

function CustomLink({to, children,  ...props}){
    const path = window.location.pathname
    return (
        <li className={path=== to ? "active" : ""}>
            <Link to={to}{...props}> {children} </Link>
        </li>
    )
}
export default Navbar;