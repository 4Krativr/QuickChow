import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthForm from './components/Authentication.jsx';
import React from 'react';
import { LandingPage } from "./components/LandingPage.jsx";

function App(){
    return(
      //  All the components put together and rendered on the index.js file
      <BrowserRouter>
        <Routes>

          {/* landingPage contains the import of the navbar, hero, main and footer components and the AuthForm is the component for the sign in and sign up */}
          <Route path="/QuickChow" element={<LandingPage />} />
          <Route path='/QuickChow/authentication' element={<AuthForm />} />
          <Route path="*" element={<div>Page Not Found</div>} />

        </Routes>

      </BrowserRouter>
    )
}
export default App