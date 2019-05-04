import React, {Component} from 'react';
import Input from './common/input';
import Joi from 'joi-browser';
import Form from './common/form'

export default class LoginForm extends Form {
    state = {
        data: {
            username: '',
            password: '' 
        },
        errors: {
            username: '',
            password: ''
        }   
    };

    schema = {
        username: Joi.string().required().label("Username"),
        password: Joi.string().required().label("Password")
    };

    // username = React.createRef();

    componentDidMount() {
        // this.username.current.focus();
    }

    doSubmit = () => {
        console.log('Form submitted');
    }
      
    render() {
        const {data, errors} = this.state;
        return (
            <div>
                <h3 className='wrapper'>Login Form</h3>
                <form onSubmit={this.handleSubmit}>
                    <Input name={'username'}
                        value={data.username}
                        label={'Username'}
                        type={'email'} 
                        error={errors.username}
                        onChange={this.handleChange}
                     />
                    <small id="emailHelp" className="form-text text-muted wrapper">
                        We'll never share your email with anyone else.
                    </small>
        
                    <Input name={'password'}
                        value={data.password}
                        label={'Password'}
                        type={'password'}
                        error={errors.password}
                        onChange={this.handleChange}
                    />
                                       
                    <div className="form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1"/>

                        <label>
                            Check me out
                        </label>
                    </div>

                    <button 
                        // onClick={ this.handleSubmit } 
                        disabled={this.validate()}
                        type="submit" 
                        className="btn btn-primary">
                            Submit
                    </button>
                    
                </form>
            </div>
        )
    }
}
