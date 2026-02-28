import React from 'react'
import './Loginpage.css';
import Logo from './google-symbol.png';

const Loginpage =()=> {
    return(
    <>
      <center>
    <div className="new">
    <div>
        <h2>Creating an Account</h2>
    </div>
     
       <form>
        <div className="One">
        <label>First Name</label><br/>
          <input type="First Name" placeholder="First Name"/>
         </div>

         <div className="One">
        <label>Last Name</label><br/>
        <input type="Last Name" placeholder="Last Name"/><br/>
        </div>

       <div className="One">
        <label>
         Username
        </label><br/>
        <input type="name" placeholder="👤    username"/><br/>
        </div>
        <div className="One">
        <label>
        Email
        </label><br/>
        <input type="email" placeholder="📧    email id"/><br/>
        </div>

        <div className="One">
        <label>Password</label><br/>
        <input type="pass" placeholder="🔐    Password"/>
        </div>

            <button>Sign Up</button>
        <div className="Two">
        <p>
            By creating an account, you agree to the Terms of Service. We'll occasionally send you account
            related emails.
            
        </p><br/>
        <div>
            Already have an account? <span className='Three'>Login</span>
        </div><br/>
       
        </div>
        <footer>
            <img src="./google-symbol.png" alt='logo'/>
        </footer>
         
            

       </form>
    </div>
    </center>
    </>
      );
}
export default Loginpage