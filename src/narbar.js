function navbar(){
    return(
        <nav className="nav">
        <a href="/" className="site_title">Fruit n Veg</a>
        <ul>
           <li>
               <a href = "/Market">Basket</a>
           </li>
            <li>
                <a href = "/Stock">Produce</a>
            </li>
        </ul>
    </nav>
    )
}
export default navbar;