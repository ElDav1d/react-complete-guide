import React, { useEffect } from 'react';

import classes from './Cockpit.css'

const cockpit = (props) => {
    useEffect(() => {
        console.log('[Cockpit.js useEffect]')
    });
    

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
            <h1>{props.title}</h1>
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