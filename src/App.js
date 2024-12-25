import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthForm from './components/Authentication.jsx';
import React from 'react';
import { LandingPage } from "./components/LandingPage.jsx";
import MainPage from "./components/QuickChopMainPage.js";

function App(){
    return(

      //  All the components put together and rendered on the index.js file
        <BrowserRouter>
             <Routes>

                {/* landingPage contains the import of the navbar, hero, main and footer components and the AuthForm is the component for the sign in and sign up */}
                <Route path="/QuickChow" element={<LandingPage />} />
                <Route path='/authentication' element={<AuthForm />} />
                <Route path='/HomePage' element={<MainPage />} />

             </Routes>

        </BrowserRouter>
    )
}
export default App