import React from 'react'
import { useState } from "react";
import { Link } from "react-router-dom";
import './Login.css'


export const Login = () =>{
    const [email, setEmail] = useState("");
    return (
        <div className="auth-component">
            <div className="auth-heading">
               <h2>Log In</h2> : <h2>Register</h2>
            </div>
            {/* {error !== '' && <div className="error">{error}</div> } */}
            <form className="authform-container">
                <div className="auth-field">
                    <label>Enter email: </label>
                    <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email"></input>
                </div>

                <div className="auth-field">
                    <label>Enter password: </label>
                    <input  placeholder="Password"></input>
                </div>

                <button className="auth-btn">
                    {'login' ? 'Log In' : 'Register'}
                </button>
            </form>
            <div className="help-flex">
                <Link to={`${ 'login' ? '/register' : '/login'}`}>
                    { 'login' ? 'Register' : 'Log In'}
                </Link>
          
            </div>
        </div>
    )
}
