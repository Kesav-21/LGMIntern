const NumberKey=(props)=>{
    return(
        <button className="btn" id={props.id} onClick={()=>props.dispout(props.numkey)}>{props.numkey}</button>
    )
}

export default NumberKey;