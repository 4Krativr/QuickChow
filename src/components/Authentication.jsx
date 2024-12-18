import '../styles/login.scss';
import { useState } from 'react';
import quickchow from '../assets/quick-chow-logo.png';
import img1 from '../assets/Login:Signup-assets/floating-img-1.png';
import img2 from '../assets/Login:Signup-assets/floating-img-2.png';
import img3 from '../assets/Login:Signup-assets/floating-img-3.png';


const AuthForm = () => {

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


 // code block for switching the forms
 const [isSignUp, setIsSignUp] = useState(true);

 const  toggleForm = () => {
  setIsSignUp((prevState) => !prevState)
 };

 return(
  <>
    {isSignUp && (
      <main>
        <div className="quickchow-logo">
          <img src={quickchow} alt="quickchow logo" />
        </div>
        <form action="./Main.js" method="post" id='signUp'>
          <section>
            <h2>Create a customer account</h2>
            <p className='lead-text'>
              Join us to explore a world of flavors and enjoy your favourite dishes delivered straight to your door!
            </p>
          </section>

          <section className='user-input'>
            <label htmlFor="firstName">First Name
              <input type="text" id="name" className='input-elem' required/>
            </label>

            <label htmlFor="LastName">Last Name
              <input type="text" id="name" className='input-elem' required/>
            </label>

            <label htmlFor="emailAddress">Email Address
              <input type="email" id="email" className='input-elem' required/>
            </label>

            <label htmlFor="mobileNumber">Mobile Number
              <input type="text" id="mobile-number" className='input-elem' required/>
            </label>

            <label htmlFor="referral">Referral Code (Optional)
              <input type="text" id="name" className='input-elem'/>
            </label>

            <div className="isStudent">
              <h2>Are you a student</h2>
              <div>
                <label htmlFor="isStudent">
                  <input type="radio" value= 'true' name='student'/>
                  Yes
                </label>
                <label htmlFor="!isStudent">
                  <input type="radio" value= 'false' name='student'/>
                  No
                </label>
              </div>
            </div>
            <label htmlFor="university">University/School
              <select className='form-select input-elem' aria-label="value">
                <option value>
                  <span className='selector-span'>
                    Olabisi Obasanjo University
                  </span>
                  </option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </label>
            <label htmlFor="password">Password
              <input type="password" id="password" className='input-elem' required/>
            </label>
            <label htmlFor="password">Confirm Password
              <input type="password" id="validPassword" className='input-elem' required/>
            </label>
          </section>
          
          <section className='sign-up'>
              <button onClick={FormValidate}>Sign Up </button>
              <span>Already have an account? <a href="#" onClick={toggleForm}>Sign In</a></span>
          </section>
        </form>
        <div className="floating-img-1">
          <img src={img1} alt="" />
        </div>
        <div className="floating-img-2">
          <img src={img2} alt="" />
        </div>
        <div className="floating-img-3">
          <img src={img3} alt="" />
        </div>
      </main>

    )}  

     {!isSignUp && (
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
            <button onClick={FormValidate}>Sign in</button>
            <span>New User? <a href="#" onClick={toggleForm}>Sign Up</a></span>
          </section>
        </form>      

     )}

  </>
 );
}

export default AuthForm;
