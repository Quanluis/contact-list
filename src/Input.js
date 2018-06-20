import React from "react";
import "./App.css";

class Input extends React.Component {
    constructor(){
        super();
            this.state = {
                name: "",
                number: ""

            }   
            this.onChangeName = this.onChangeName.bind(this)
            this.onChangeNumber = this.onChangeNumber.bind(this)
          
        }
        onChangeName(event){
            this.setState({name: event.target.value})
        }
        onChangeNumber(event){
            this.setState({number: event.target.value})
        }
    render() {
        return (
            <div>
        <h1>List</h1>
        <input type="text" placeholder="Name" value = {this.state.name} onChange = {this.onChangeName} />
        <input type="number" placeholder="Number" value = {this.state.number} onChange = {this.onChangeNumber} />
        <button className = "add">+</button>
        <div className = "contact" >
        <h1 className = "results">Name: {this.state.name} </h1>
        <h1 className = "results">Number: {this.state.number}</h1>
        <button className = "subtract">-</button>
        </div>
      </div>
        )
    }
};

export default Input;
