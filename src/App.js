import Navbar from './components/Navbar.js';
import Hero from './components/Hero.js';
import Main from './components/Main.js';
import Footer from './components/Footer.js';
function App(){
    return(
        //All the components put together and rendered on the index.js file
        <div>
            <Hero />
            <Main />
            <Footer />
        </div>
    )
}
export default App