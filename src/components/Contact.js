import React from "react";
import "./Contact.css";





class Contact extends React.Component {
    constructor (props){
        super(props);
        this.state = {
            isConnected : false,

        } 
    
    }

    render(){
        return(
            <div className = "Contact">
                <img src = {this.props.image} className = 'avatar'/>
                <div>
                    <h3 className = 'name'>{this.props.name}</h3>
                    <div onClick = {event =>{const newState = !this.state.isConnected; this.setState({isConnected : newState })}}   className = 'status'>
                        <div className = {this.state.isConnected ? 'status-online' : 'status-offline'} ></div>
                        <p className = 'status-text'>{this.state.isConnected ? "online" : "offline"}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Contact;






