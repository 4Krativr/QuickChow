import '../styles/signup.scss';
import {Link, useLocation} from 'react-router-dom';
import { useEffect } from 'react';
import quickchow from '../assets/quick-chow-logo.png';
import img1 from '../assets/Login:Signup-assets/floating-img-1.png';
import img2 from '../assets/Login:Signup-assets/floating-img-2.png';
import img3 from '../assets/Login:Signup-assets/flaoting-img-3.png';
import password from '../assets/Login:Signup-assets/password-img.svg';

const Login = () => {

 // code block for the form validation
 function FormValidate(){
  const userInput = document.querySelectorAll('input');
  userInput.forEach((inputBox) => {
    inputBox.addEventListener('blur', ()=>{
      if (inputBox.value === "") {
        inputBox.style.border = '1px solid red'
       }
      else{
        inputBox.style.border = '1px solid green'
       }
    })
  })
 }
 //This block of code removes the "overflow: hidden" style which prevents the webpage to scroll horizontally or vertically
 const location = useLocation();
    useEffect(() => {
      document.body.style.overflow = ''; // Reset on route change
    }, [location]);

 return(
  <>
  <main className="main-signup main-login">
    <div className="main-body">
      <div className="quickchow-logo">
          <img src={quickchow} alt="quickchow logo" />
      </div>
      <form action="" method="post" id='signIn' className='form-input'>
        <section>
        <h2>Login</h2>
        <p>Welcome back! Please login to your account</p>
        </section>

        <section className='user-input'>
          <label htmlFor="email">Email Address
            <input className='input-elem' type="email" id='email' required/>
          </label>
          <label htmlFor="password" className='password-label'>Confirm Password
            <img src={password} alt="show-password" className='js-reveal-password'/>
            <input type="password" id="validPassword" className='input-elem' required/>
          </label>
        </section>

        <section className='sign-up'>
          <button onClick={FormValidate}>Login</button>
          <span>New User?  
            <Link to = 'signup'>
              Sign up
            </Link>
          </span>
        </section>
      </form>  
    </div>
    <div className="floating-img-1">
          <img src={img1} alt="food" />
      </div>
      <div className="floating-img-2">
          <img src={img2} alt="food" />
      </div>
      <div className="floating-img-3">
          <img src={img3} alt="food" />
      </div> 
  </main>  
  </>
 );
}

export default Login;
