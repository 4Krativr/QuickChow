import '../styles/signup.scss';
import {  Link } from 'react-router-dom';
import quickchow from '../assets/quick-chow-logo.png';

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

 return(
  <>
  <main className="main-signup">
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
          <label htmlFor="password">Password
            <input className='input-elem' type="password" id='password' required/>
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
  </main>  
  </>
 );
}

export default Login;
