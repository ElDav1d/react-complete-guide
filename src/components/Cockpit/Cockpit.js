import React, { useEffect, useRef } from 'react';

import classes from './Cockpit.css'
import AuthContext from '../../context/auth-context'

const cockpit = (props) => {
    const toggleBtnRef = useRef(null);

    useEffect(() => {
        console.log('[Cockpit.js useEffect]')
        //Faking Http request
        // const timer = setTimeout(() => {
        //     alert('Saved data to cloud!!')
        // }, 1000);
        toggleBtnRef.current.click();
        return () => {
            // clearTimeout(timer);
            console.log('[Cockpit.js cleanup in useEffect]')
        }
    }, []);

    useEffect(() => {
        console.log('[Cockpit.js 2nd useEffect]')
        return () => {
            console.log('[Cockpit.js cleanup in 2nd useEffect]')
        }
    });
    
    const assignedClasses = [];
    let buttonClass = '';
    
    if ( props.showPersons) {
        buttonClass = classes.Red;
    }
    
    if ( props.personsLength <= 2 ) {
        assignedClasses.push(classes.red);
    }

    if ( props.personsLength <= 1 ) {
        assignedClasses.push(classes.bold);
    }

    return (
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className={assignedClasses.join(' ')}>This is really working!</p>
            <button
                ref={toggleBtnRef}
                className={buttonClass}
                onClick={props.clicked}>
                Toggle Persons
            </button>
            <AuthContext.Consumer>
                {context => <button onClick={context.login}>Log in</button>}           
            </AuthContext.Consumer>
        </div>
    );
};

export default React.memo(cockpit);