import React from 'react';

import classes from './Cockpit.css'

const cockpit = (props) => {
    const personsLength = props.persons.length;
    const assignedClasses = [];
    let buttonClass = '';
    
    if ( props.showPersons) {
        buttonClass = classes.Red;
    }
    
    if ( personsLength <= 2 ) {
        assignedClasses.push(classes.red);
    }

    if ( personsLength <= 1 ) {
        assignedClasses.push(classes.bold);
    }

    return (
        <div className={classes.Cockpit}>
            <h1>Hi, I'm a React App</h1>
            <p className={assignedClasses.join(' ')}>This is really working!</p>
            <button
                className={buttonClass}
                onClick={props.clicked}>
                Toggle Persons
            </button>
        </div>
    );
};

export default cockpit;