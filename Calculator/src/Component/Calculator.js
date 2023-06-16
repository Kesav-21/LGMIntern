import React from "react";
import NumberKey from "./NumberKey";

class Calculator extends React.Component{
    constructor(props){
        super(props);
        this.state={
            calcout:"",
            finout:"",
            operators:['+','-','*','/','.'],
        }
        this.dispout=this.dispout.bind(this);
        this.clearAll=this.clearAll.bind(this);
        this.equalout=this.equalout.bind(this);
    }
    clearAll(){
        this.setState({calcout:"",finout:""});
    }
    dispout(input){
        if
        (
            this.state.operators.includes(input) & this.state.calcout==="" ||
            this.state.operators.includes(input) & this.state.operators.includes(this.state.calcout.slice(-1))
        ){
            return
        }
        this.setState({calcout:this.state.calcout+input})
        if(!this.state.operators.includes(input)){
            this.setState({finout:eval(this.state.calcout+input).toString()})
        }
    }
    equalout(){
        this.setState({calcout:eval(this.state.calcout).toString(),finout:""})
    }

    render(){
        return(
            <div className="main-container">
                <section className="disp-container">

                    <div id="display">{this.state.calcout || '0'}</div>
                    <div className="output-container">
                    <div id="secondDisplay">{this.state.finout || '0'}</div>
                    <button className="btn" onClick={this.clearAll}>AC</button>
                    </div>
                </section>
                <section className="btn-section">
                    <NumberKey id="one" numkey="1" dispout={this.dispout}/>
                    <NumberKey id="two" numkey="2" dispout={this.dispout}/>
                    <NumberKey id="three" numkey="3" dispout={this.dispout}/>
                    <NumberKey id="plus" numkey="+" dispout={this.dispout}/>
                    <NumberKey id="four" numkey="4" dispout={this.dispout}/>
                    <NumberKey id="five" numkey="5" dispout={this.dispout}/>
                    <NumberKey id="six" numkey="6" dispout={this.dispout}/>
                    <NumberKey id="minus" numkey="-" dispout={this.dispout}/>
                    <NumberKey id="seven" numkey="7" dispout={this.dispout}/>
                    <NumberKey id="eight" numkey="8" dispout={this.dispout}/>
                    <NumberKey id="nine" numkey="9" dispout={this.dispout}/>
                    <NumberKey id="multiply" numkey="*" dispout={this.dispout}/>
                    <NumberKey id="zero" numkey="0" dispout={this.dispout}/>
                    <NumberKey id="decimal" numkey="." dispout={this.dispout}/>
                    <NumberKey id="divide" numkey="/" dispout={this.dispout}/>
                    <NumberKey id="equal" numkey="=" dispout={this.equalout}/>
                </section>
            </div>
        )
    }
}

export default Calculator;