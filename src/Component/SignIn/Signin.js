import React, { Component } from 'react'
import './Signin.scss'
import FormInput from '../FromInput/FormInput';
export default class Signin extends Component {
constructor(props)
{
    super(props);
    this.state = {
        email:'',
        password:''
    }
}

handleSubmit=(e) =>
{

    e.preventDefault();
    this.setState({email:'',password:''});
}
    

handleChange =(e)=>
{
 this.setState({[e.target.name]: e.target.value})
}

    render() {
        return (
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                   <FormInput type="email" name="email" label='email' handleChange={this.handleChange} value ={this.state.email} required/> 
            
                   <FormInput type="password" name="password" label='password' handleChange={this.handleChange} value ={this.state.password} required/> 
                 

                   <input type="submit" value="SubmitForm"/>
                </form>
            </div>
        )
    }
}
