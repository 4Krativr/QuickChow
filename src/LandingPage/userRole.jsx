// import '../styles/LandingPage-styles/user-role.scss'
// import { role } from '../components/Signup';
// function UserRole(){
//     const body = document.body;
//     body.style.overflow = 'hidden';
//     function closeModal(){
//         const overlay = document.querySelector('.overlay');
//         overlay.style.display = 'none';
//         body.style.overflow = 'auto';
//     }   
//     return(
//         <div className="overlay">
//             <div className='overlay-body'>
//                 <div className='overlay-content'>
//                     <div className='overlay-header'>
//                         <h1>Who Are You?</h1>
//                         <p>
//                             Please select your role to continue
//                         </p>
//                     </div>
//                     <div className='submit-role'>
//                         <label htmlFor="user-role">
//                         <select className="form-select form-select-lg mb-3 select-role js-select-role" aria-label="Large select example">
//                             <option value = 'Kitchen/Restaurant'>Kitchen/Restaurant</option>
//                             <option value="Courier">Courier</option>
//                             <option value="Customer">Customer</option>
//                         </select>
//                         </label>
//                         <button onClick={() => {role()}}>Continue</button>
//                     </div>
//                 </div>
//                 <div className='close-modal' onClick={() => {closeModal()}}>x</div>
//             </div>
//         </div>
//     )
// }
// export default UserRole;