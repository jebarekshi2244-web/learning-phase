import React from 'react';
import './Login.css'
const Login =()=>{
    return (
        <>
        <center>
       <div className="new">
        
        <h2>Sign in with email</h2>
        <p>make a database with json and document with this login</p>
        <form>

            <div>📧<input type="email" placeholder="enter your email"/></div>
            <div>🔐<input type="password" placeholder="enter your password"/></div>
            <a href="#" className="forgot">Forgot passoword?</a>
            <button>Login</button>
           
        </form>
         
       </div>
       </center>
       </>
    )
}

export default Login