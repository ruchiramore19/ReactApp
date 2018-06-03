import React, { Component } from 'react';
import Person from './Person/Person';

const Persons = (props) => props.person.map((person, index) => {
    return 
    <Person 
      name={person.name}
      age= {person.age}
      key = {person.id}
      click = {() => props.clickedDel(index)}
      changed = {(event) => props.nameChange(event,person.id)}
    />
});

export default Persons;