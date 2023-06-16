import React from "react";
import Header from "./Header";
import Loading from "./Loading";

class Users extends React.Component{
    constructor(props){
        super(props);
        this.state={
            user:[],
            isLoading:true
        }
        this.fetchUsers=this.fetchUsers.bind(this);
        this.displayUsers=this.displayUsers.bind(this);
    }

    fetchUsers= async ()=>{
        if(this.isLoading){
            <Loading/>
        }
        try{
            const response=await fetch("https://reqres.in/api/users?page=1");    
            const users=await response.json();
            this.setState({user:users.data});
            console.log(this.state.user);
        } catch (err) {
          console.log(err.message);
        } finally {
          this.setState({isLoading:!this.state.isLoading});
        }
      };

    displayUsers(){
        return(
            this.state.user.map(elem=>{
                return(
                    <div className="card" key={elem.id}>
                        <img src={elem.avatar} width={220} height={220} alt="profile"/>
                        <h3>{elem.first_name+" "+elem.last_name}</h3>
                        <h4>{elem.email}</h4>
                    </div>
                )
            })
        )
    }

    render(){
    return(
        <React.Fragment>
            <Header getDetails={this.fetchUsers}/>
            <div className="container">
            {this.displayUsers()}
            </div>
        </React.Fragment>
    )
    }
}

export default Users;