import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Login from './components/Login.js';
import Signup from './components/Signup.js';
import { LandingPage } from "./LandingPage/LandingPage.jsx";
// import MainPage from "./components/QuickChopMainPage.js";

function App(){
    return(

      //  All the components put together and rendered on the index.js file
      <BrowserRouter>
        <Routes>
          {/* landingPage contains the import of the navbar, hero, main and footer components and the AuthForm is the component for the sign in and sign up */}
          <Route path="/QuickChow" element={<LandingPage />} />
          <Route path='/QuickChow/Login' element={<Login />} />
          <Route path='/QuickChow/signup' element={<Signup />} />
          <Route path='/QuickChow/Login/signup' element={<Signup />} />
          <Route path='/QuickChow/signup/Login' element={<Login />} />
          {/* <Route path='/QuickChow/HomePage' element={<MainPage />} /> */}
          <Route path="*" element={<Navigate to='/QuickChow/Login' replace />} />
        </Routes>

      </BrowserRouter>
    )
}
export default App