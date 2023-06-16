import React from "react";
import Forms from "./Forms";
import male from "../assets/img/male.png";
import female from "../assets/img/female.png";
class Enrolled extends React.Component{
    constructor(props){
      super(props);
      this.state={
        details:[{id:0,name:"test",email:"test@mail.com",web:"test.com",imglink:"male.png",gender:"male",skills:['HTML','CSS','JAVA'],imgmode:true}],
        id:1,
      }
      this.submitHandler=this.submitHandler.bind(this);
    }
    submitHandler(e){
        const name=e.target.elements[0].value;
        const email=e.target.elements[1].value;
        const web=e.target.elements[2].value;
        const imglink=e.target.elements[3].value;
        const gender=e.target.elements.gender.value;
        const imgmode=(gender=="male"? true:false);
        let skills=e.target.elements.skill;
        const listskill=[];
        for (var skill of skills){
          if(skill.checked){
            listskill.push(skill.value);
          }
        }
        const addform=this.state.details.concat({id:this.state.id,name:name,email:email,web:web,imglink:imglink,gender:gender,skills:listskill,imgmode:imgmode});
        this.setState({id:this.state.id+1,details:addform});
        console.log(this.state.details)
        e.preventDefault();
    }
    render(){
    return (
        <div className="container">
            <Forms sub={this.submitHandler}/>
            <div className="vl"></div>
      <div>
        <h1>Enrolled Students</h1>
        <table>
            <thead>
          <tr>
            <th>Description</th>
            <th>Image</th>
          </tr>
          </thead>
          <tbody>
            {this.state.details.map(elem=>{
                return(
                    <tr key={elem.id}>
                        <td className="text-details">
                          Name: {elem.name}<br/>
                          Email: {elem.email}<br/>
                          Website: <a href={elem.web}>{elem.web}</a><br/>
                          Gender: {elem.gender}<br/>
                          Skills:
                          <ul>{elem.skills.map(ele=>{return(<li>{ele}</li>)})}</ul>
                          </td>
                        <td><img src={elem.imgmode ? male:female} width={150} height={150} alt="profileimg"/>{elem.img}</td>
                    </tr>
                )
            })}
            </tbody>
        </table>
      </div>
      </div>
    )
  }
  }
  
  export default Enrolled;