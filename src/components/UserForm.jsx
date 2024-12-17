import { useState } from 'react';

const UserDetails = () => {


 // code block for the form validation
 function FormValidate(){
  const userInput = document.querySelectorAll('input')
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
   <div>
     <img src="../assets/quick-chow-logo.png" alt="" />
   </div>
    {isSignUp && (
              <form action=" " method="post">
              <section>
               <h2>Create Account</h2>
               <span>Join us to explore a world of flavors and enjoy your favourite dishes delivered right at your door!</span>
              </section>
    
              <section>
                <label htmlFor="userFirstName">First Name</label>
                <input type="text" id="userFirstName" required/>
    
                <label htmlFor="userLastName">Last Name</label>
                <input type="text" id="userLastName" required/>
    
                <label htmlFor="userEmail">Email</label>
                <input type='email' id="userEmail" required/>
    
                <label htmlFor="userTelephoneNumber">Mobile Number</label>
                <input type="text" id="userTelephoneNumber" required/>
    
                <label htmlFor="referralCode">Referral Code[Optional]</label>
                <input type="text" id="referralCode" />

                <label htmlFor="userPassword1">Password</label>
                <input type="password" required/>

                <label htmlFor="userPassword2">Confirm Password</label>
                <input type="password" required/>        

              </section>
              
              <section>
                 <button onClick={FormValidate}>Sign Up </button>
                 <span>Already have an account? <a href="#" onClick={toggleForm}>Sign In</a></span>
              </section>
    
    
           </form>

    )}  

     {!isSignUp && (
           <form action="" method="post">

           <section>
            <h2>Login</h2>
            <span>Welcome back! Please login to your account</span>
           </section>
      
            <section>
              <label htmlFor="userEmail">Email Address</label>
              <input type="email" id='userEmail' required/>

              <label htmlFor="userPassword1">Password</label>
              <input type="password" required/>

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

export default UserDetails;
