import React, {Component} from 'react';
import classes from 'C:/Users/DELL/ReactProjects/reactapp/src/components/Persons/Person/Person.css';
const Person = (props) => {

    return (
    <div className={classes.Person}>
    <h1 onClick = {props.click}>I am {props.name} of {props.age} years old</h1>
    <p>{props.children}</p>
    <input type = 'text' onChange = {props.changed} value = {props.name}/>
    </div>
    );
}

export default Person;