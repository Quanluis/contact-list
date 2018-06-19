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
        <button>+</button>
        <h1>Name: {this.state.name} </h1>
        <h1>Number: {this.state.number}</h1>
        
      </div>
        )
    }
};

export default Input;
