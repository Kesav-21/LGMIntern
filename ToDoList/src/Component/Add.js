import { useState } from "react";
import add from "../assets/img/plus.svg";
import minus from "../assets/img/minus.svg";
import right from "../assets/img/right.svg";

const Add=(props)=>{
    const [isFormVisible,setFormVisible]=useState(false);
    const toggleAddForm=()=>{
        const formExp=document.getElementById("addTask");
        if(isFormVisible){
            formExp.style.display="none";
            setFormVisible(!isFormVisible);
        }
        else{
            formExp.style.display="flex";
            setFormVisible(!isFormVisible);
        }
    }
    
    return(
        <div className="container">
            <div className="container-header">
            <h3>Add a New Task</h3>
            <img src={isFormVisible ? minus : add} width={40} height={40} onClick={toggleAddForm} alt="add"/>
            </div>
            <form onSubmit={props.onSubmitHandler} id="addTask">
                <label htmlFor="taskname"><b>Task Name</b></label>
                <input type="text" name="taskname" className="input-class" placeholder="Enter Task Name" required autoFocus/>
                <button className="btn" type="submit" ><img src={right} onSubmit={toggleAddForm} width={30} height={30} alt="right"/></button>
            </form>
        </div>
    )
}

export default Add;