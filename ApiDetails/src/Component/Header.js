const Header=(props)=>{
    return(
        <header>
            <h1>APIUsers</h1>
            <button className="btn" onClick={props.getDetails}>Get Details</button>
        </header>
    )
}

export default Header;