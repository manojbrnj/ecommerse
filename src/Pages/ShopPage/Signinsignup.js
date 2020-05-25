import React, { Component } from 'react'
import './Signinsignup.scss'
import Signin from '../../Component/SignIn/Signin'
export default class Signinsignup extends Component {
    render() {
        return (
            <div className='sign-in-and-sign-up'>
               <Signin></Signin>
            </div>
        )
    }
}
