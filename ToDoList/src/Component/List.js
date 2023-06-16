import React from "react";
import Add from "./Add";
import tick from '../assets/img/tick.svg';
import deleteico from '../assets/img/delete.svg';
class List extends React.Component{
    constructor(props){
    super(props);
    this.state={
        tasks:[],
        id:0
    }
    this.onSubmitHandler=this.onSubmitHandler.bind(this);
    this.markDoneHandler=this.markDoneHandler.bind(this);
    this.deleteHandler=this.deleteHandler.bind(this);
}

onSubmitHandler(event){
    const addlist=this.state.tasks.concat({id:this.state.id,tname:event.target.elements[0].value,tdesc:event.target.elements[1].value});
    this.setState({tasks:addlist});
    this.setState({id:this.state.id+1});
    document.getElementById("addTask").reset();
    event.preventDefault();
}

markDoneHandler(event){
    console.log(event.target);
    event.target.classList.toggle("striking");
}

deleteHandler(event){
    const lists=this.state.tasks.filter(item=>item.id!==parseInt(event.target.id));
    this.setState({tasks:lists});
}

render(){
    return(
        <div>
            <Add onSubmitHandler={this.onSubmitHandler}/>
            <div>
            {this.state.tasks.map(elem=>
            <div key={elem.id} className="listItem" >
            <p className="taskp" onClick={this.markDoneHandler}><img id="tick" src={tick} height={23} width={23} alt="tick"/>{elem.tname}</p>
            <img src={deleteico} id={elem.id} height={30} width={30} onClick={this.deleteHandler} alt="delete"/>
            </div>
            )}
            </div>
        </div>
    )
}
}
export default List;