import React,  { Component } from 'react';
import classes from './Person.css';
import Auxiliary from '../../../hoc/Auxiliary';
import withClass from '../../../hoc/withClass';
import PropTypes from 'prop-types';
import AuthContext from '../../../context/auth-context'

class Person extends Component {
    constructor() {
        super();
        this.inputElementRef = React.createRef();
    }

    componentDidMount() {
        // this.inputElement.focus();
        this.inputElementRef.current.focus()
    }
    
    render(){
        console.log('[Person.js] rendering...');
        return (            
            <Auxiliary >
                <AuthContext.Consumer>
                    {context =>
                        context.authenticated ? <p>Authenticated!</p> : <p>Please log in</p>
                    }
                </AuthContext.Consumer>
                    <p onClick={this.props.click}>
                        I'm {this.props.name} and I'm {this.props.age} years old!
                    </p>
                    <p>{this.props.children}</p>
                    <input
                        // ref={(inputEl) => {this.inputElement = inputEl}}
                        ref={this.inputElementRef}
                        type="text"
                        onChange={this.props.changed}
                        value={this.props.name}
                    />
            </Auxiliary>
        );
    }
}

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
};

export default withClass(Person, classes.Person);