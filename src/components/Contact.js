import React from "react";
import "./Contact.css";





const Contact = (props) => (
    <div className = "Contact">
        <img src = {props.image} className = 'avatar'/>
        <div>
            <h3 className = 'name'>{props.name}</h3>
            <div className = 'status'>
                <div className = {props.online ? 'status-online' : 'status-offline'} ></div>
                <p className = 'status-text'>{props.online ? "online" : "offline"}</p>
            </div>
        </div>
    </div>
)

export default Contact;






