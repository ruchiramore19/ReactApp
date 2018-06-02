import React, {Component} from 'react';
import './Person.css';
const Person = (props) => {

    const style = {
        '@media(min-width:500px)':{
            width: '450px'
        }
    }

    return (
    <div className='Person' style={style}>
    <h1 onClick = {props.click}>I am {props.name} of {props.age} years old</h1>
    <p>{props.children}</p>
    <input type = 'text' onChange = {props.changed} value = {props.name}/>
    </div>
    );
}

export default Person;