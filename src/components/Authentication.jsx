import '../styles/login.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import React, { useRef } from 'react'


const AuthForm = () => {
   const navigate = useNavigate();
   const formRef = useRef(null); //Refernce for the form

 // code block for the form validation

 function FormValidate(event){
  event.preventDefault();

    // Access all inputBoxes in the form
    const userInput = Array.from(formRef.current.querySelectorAll('input'));
    const firstFourInputs = userInput.slice(0, 4); // checks for the compulsory first four inputs if the input boxes have been filled
    let isFirstFourFilled = true;


    firstFourInputs.forEach((inputBox) => {
      if (inputBox.value.trim() === "") {
        inputBox.style.border = '1px solid red';
        isFirstFourFilled = false;
      } else {
        inputBox.style.border = '1px solid green';
        
      }
    });

    if (isFirstFourFilled) {
      navigate('/HomePage');
    }
  };



 // code block for switching the forms
 const [isSignUp, setIsSignUp] = useState(true);

 const  toggleForm = () => {
  setIsSignUp((prevState) => !prevState)
 };

 return(
  <>
    {isSignUp && (
              <form action="" ref={formRef} method="post" className="AuthForm" id='signUp'>
              <section className="formHeader">
               <h2>Sign Up</h2>
               <span>Create an Account to continue</span>
              </section>
    
              <section className="formBody">
                <label htmlFor="firstName">First Name</label>
                <input type="text" id="name" required/>
    
                <label htmlFor="name">Last Name</label>
                <input type="text" id="lastName" required/>
    
                <label htmlFor="email">Email</label>
                <input type="text" id="email" required/>
    
                <label htmlFor="telephoneNumber">Mobile Number</label>
                <input type="text" id="telephoneNumber" required/>
    
                <label htmlFor="referralCode">Referral Code(Optional)</label>
                <input type="text" id="referralCode" />
    
              
              </section>
              
              <section className="formFooter">
                 <button className="formsubmit" type='submit' onClick={FormValidate}>Sign Up </button>
                 <span>Already have an account? <a href="#" onClick={toggleForm}>Sign In</a></span>
              </section>
    
    
           </form>

    )}  

     {!isSignUp && (
           <form action="" ref={formRef} method="post" className='AuthForm' id='signIn'>

           <section className="formHeader">
            <h2>Sign In</h2>
            <span>Log in to continue</span>
           </section>
      
            <section className='formBody'>
              <label htmlFor="telephponeNumber">Mobile Number</label>
              <input type="text" id='telephponeNumber' required/>
            </section>
      
            <section className="formFooter">
                   <button className="formsubmit" type='submit' onClick={FormValidate} >Sign in</button>
                   <span>New User? <a href="#" onClick={toggleForm}>Sign Up</a></span>
                </section>
      
      
           </form>      

     )}

  </>
 );
}

export default AuthForm;
