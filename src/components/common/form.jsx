import React, {Component} from 'react';
import Joi from 'joi-browser';

class Form extends Component {
    state = {
        data: {},
        errors: {}
    }

    validate = () => {
        const options = {
            abortEarly: false
        };
        const {error} = Joi.validate(this.state.data, this.schema, options);

        if (!error) {
            return null;
        }

        const errors = {};
        for (let item of error.details) {
            errors[item.path[0]] = item.message;
        }

        return errors;
    }

    // validateProp = input => {
    validateProp = ({name, value}) => {
        // computed properties in es6
        const obj = {
            [name]: value
        };
        const partialSchema = {
            [name]: this.schema[name]
        };
        const {error} = Joi.validate(obj, partialSchema);

        return error
            ? error.details[0].message
            : null;
    }
    
    handleSubmit = (e) => {
        e.preventDefault();
        // const username = document.getElementById('username').value;
        // const username = this.username.current.value;  with ref

        const errors = this.validate();
        this.setState({errors: errors || {} });
   
        if (errors) return;

        this.doSubmit();
    }
    
    handleChange = ({currentTarget: input}) => {
        const errors = {...this.state.errors};
        const error = this.validateProp(input);

        if (error) {
            errors[input.name] = error;
        } else {
            delete errors[input.name];
        }
               
        const data = {...this.state.data};
        // data.username = e.currentTarget.value;y
        data[input.name] = input.value;
        
        this.setState({data, errors}); 
    }
  
}

export default Form;
