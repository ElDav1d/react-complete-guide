import React, { Component } from 'react';
// import styled from 'styled-components';
import classes from './App.css';
import Person from './Person/Person';

// const StyledButton = styled.button `
//   background-color: ${ props => props.personsAreShown ? 'red' : 'green' };
//   color: white;
//   font: inherit;
//   border: 1x solid blue;
//   padding: 8px;
//   cursor: pointer;

//   &:hover {
//     background-Color: ${ props => props.personsAreShown ? 'salmon' : 'lightgreen' };
//     color: black;
// `;

class App extends Component {
  state = {
    persons: [
      { id: 'weq233', name: 'Max', age: 28 },
      { id: 'nregu1', name: 'Manu', age: 29 },
      { id: 'nre654', name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value',
    showPersons : false
  };

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(personFromState => {
      return personFromState.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;
    
    this.setState( { persons: persons} );
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons})
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render() {
    // const style = {
    //   backgroundColor: 'green',
    //   color: 'white',
    //   font: 'inherit',
    //   border: '1x solid blue',
    //   padding: '8px',
    //   cursor: 'pointer',
    //   ':hover': {
    //     backgroundColor: 'lightgreen',
    //     color: 'black'
    //   }
    // };

    let persons = null;
    let buttonClasses = [classes.Button];

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
              click={this.deletePersonHandler.bind(this, index)}
              // click={() => this.deletePersonHandler(index)}
              name={person.name}
              age={person.age}
              key={person.id}
              changed={(event) => this.nameChangedHandler(event, person.id)} />
          })}
        </div>
      );

      // style.backgroundColor = 'red';
      // style[':hover'] = {
      //   backgroundColor: 'salmon',
      //   color: 'black'
      // }

      buttonClasses.push(classes.Red)
    }
    
    const personsLength = this.state.persons.length
    const assignedClasses = []

    if (personsLength <= 2) {
      assignedClasses.push('red'); // assignedClasses = ['red']
    }
    if (personsLength <= 1) {
      assignedClasses.push('bold'); // assignedClasses = ['red', 'bold']
    }

    return (
      <div className={classes.App}>
        <h1>Hi, I'm a React App</h1>
        <p className={assignedClasses.join(' ')}>This is really working!</p>
        {/* <StyledButton // style={style}
          personsAreShown={this.state.showPersons}
          onClick={this.togglePersonsHandler}>
            Toggle Persons
        </StyledButton> */}
        <button
          className={buttonClasses.join(' ')}
          onClick={this.togglePersonsHandler}>
            Toggle Persons
        </button>
        {persons}
      </div>
    );
  }
}

export default App;
