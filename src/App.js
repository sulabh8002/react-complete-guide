import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';
class App extends Component {

  state = {
    persons: [
      { name: 'Sameer', age: 23 },
      { name: 'Sulabh', age: 23 },
      { name: 'Max', age: 28 }
    ]
  }

  switchNameHandler = (name) => {
    console.log("Button clicked")
    this.setState({
      persons: [
        { name: 'Sameer', age: 23 },
        { name: 'Sulabh', age: 23},
        { name: name, age: 25 }
      ]
    })
  }

  nameChangedHandler = (event, id) => {

    let index = this.state.persons.findIndex( person => 
      person.id == id)

    let person = {...this.state.persons[index]}

    person['name'] = event.target.value

    let persons = [...this.state['persons']]
    persons[index] = person

    this.setState( { persons: persons })
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons
    this.setState({showPersons: !doesShow})

  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons]
    persons.splice(personIndex, 1)
    this.setState({persons: persons})
  }

  render() {

    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    let persons = null

    if ( this.state.showPersons ) {
      persons = (
        <div>
        {
          this.state.persons.map((person, index ) => {
          return <Person name = { person.name } 
                    age = { person.age } 
                    click = {() => this.deletePersonHandler(index) } 
                    key = { person.id } 
                    changed = {(event) => this.nameChangedHandler(event, person.id) }/>
          })
        }       
        </div>
      )
        style['backgroundColor'] = 'red'
    }

    let classes = []

    if(this.state.persons.length <= 2)
      classes.push('red')
    
    if(this.state.persons.length <= 1) 
      classes.push('bold')

    
    console.log(this.state)
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p className={classes.join(' ')}>This is working!</p>
        <button style = { style } onClick={this.togglePersonHandler}>Toggle Persons</button>
        {persons}
      </div>  
    );
    
  }
}

export default App;
