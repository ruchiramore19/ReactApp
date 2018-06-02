import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';
//import Radium, {StyleRoot} from 'radium';  //properties like hover are not available for js inline styling,radium has some extended properties like it

class App extends Component {
 //state is reserved object and can contain attributes like person array of objects
  state = {
    person : [
      {id:'1', name: 'Ruchira', age : '23'},
      {id:'2', name : 'Raj', age : '30'}
    ],
    showPersons : false
  }

  switchNamesHandler = (newName) =>{
    //console.log('Clicked !')
    //Dont do this - this.state.person[0].name = 'Rishi'
    this.setState(
      {
        person : [
          {name: 'Ruchira', age : '23'},
          {name : newName, age : '30'}
        ]
      }
    )

  }  // if called with this.switchNameHandler() with '()' it will be called immediately, instead we have to just pass ref


  nameChangeHandler = (event,id) => {

    const personIndex = this.state.person.findIndex(p => {
      return p.id === id;
    });

    //const person = this.state.person[personIndex]  we will mutate only the reference by this way better use '...'
    const person = {   //now have copy and not the reference
      ...this.state.person[personIndex]
    }

    person.name = event.target.value

    const persons = [...this.state.person]
    persons[personIndex] = person;

     this.setState(
      {
        person :persons

      }
    ) 
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons : !doesShow
    }) ;
  }

  deletePersons = (personIndex) => {
    //const persons = this.state.person;  has flaw as the original array is changed
    //instead we can make a copy and use
    const persons = [...this.state.person];
    persons.splice(personIndex,1);
    this.setState({
      person : persons
    })
  }

  render() {

    const style = {
      backgroundColor : 'green',
      color : 'White',
      font : 'inherit',
      border : '1px solid blue',
      padding : '8px',
      
    };

    let persons = null;
    if(this.state.showPersons){
        persons = (
          <div>
          {
            this.state.person.map((person, index) => {
              return (
              <Person 
                name={person.name}
                age= {person.age}
                key = {person.id}
                click = {() => this.deletePersons(index)}
                changed = {(event) => this.nameChangeHandler(event,person.id)}
              />
              )
            })
          }
        </div>
      );
      style.backgroundColor = 'Red';
      
    }

    //dynamically change styling of elements
    const classes = []
    if(this.state.person.length<=2){
      classes.push('red');               //['red']
    }
    if(this.state.person.length<=1){
      classes.push('bold');              //['red','bold']
    }
    const multiStyleClasses = classes.join(' ') //'red bold' this kind of string is accepted for using multiple css classes
    
    return (
      <StyleRoot>
      <div className="App">
       <p className={multiStyleClasses}>I am React App</p>
       <button style={style} onClick={this.togglePersonHandler}>Switch Names</button> 
        {persons}
      </div>
      </StyleRoot>
    );
  }
}

export default App;  //Radium is like a higher order function
