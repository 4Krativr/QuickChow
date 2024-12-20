import '../styles/login.scss';
import styles from '../styles/login.scss';
import {  Link } from 'react-router-dom'

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
    <form action="" method="post" id='signIn'>

      <section>
      <h2>Sign In</h2>
      <span>Log in to continue</span>
      </section>

      <section>
        <label htmlFor="telephponeNumber">Mobile Number</label>
        <input type="text" id='telephponeNumber' required/>
      </section>

      <section>
        <button onClick={FormValidate}>Login</button>
        <span>New User? 
          <Link to = 'signup'>
            Sign up
          </Link>
        </span>
      </section>
    </form>      
  </>
 );
}

export default Login;
