import '../styles/LandingPage-styles/hero.scss'
import '../styles/general-styles.scss'
import 'animate.css';
import Navbar from './Navbar';
import heroimg from '../assets/hero-images/hero-food-img.png';
import customerProfile from '../assets/hero-images/user-profile.png';
import phoneImg from "../assets/hero-images/phone-icon.png";
import fireIcon from "../assets/hero-images/fire-icon.png"
import timerImg from "../assets/hero-images/timer-icon.png";
function Hero(){

    return(
        //This website was created using bootstrap, the layout is and spacing contains a mixture of custom css and bootstrap css.  The font and color was created using custom css.
        <div className="container-fluid col-xxl-12 py-2 container-box">
             <Navbar />
            <div className="container-md row flex-lg-row-reverse g-5 hero-box">
                <div className="d-none d-lg-block col-10 col-sm-8 col-lg-6 hero-food">
                    <img src={heroimg} className="d-block  mx-lg-auto img-fluid" alt="food" width="700" height="500" loading="lazy"/>
                    <div className="floating-customer-div animate__animated animate__fadeInLeft">
                        <img src={customerProfile} alt="customer-img" />
                        <div className="floating-customer-content">
                            <div>
                                <h6>Okorie Victor</h6>
                                <p>Food Courier</p>
                            </div>
                            <img src={phoneImg} alt="A phone" />
                        </div>
                    </div>
                    <div className="fire-div">
                        <img src={fireIcon} alt="A fire"  loading='lazy'/>
                    </div>
                    <div className="timer-div">
                        <img src={timerImg} alt="A timer" loading='lazy'/>
                    </div>
                </div>
                <div className="col-lg-6 hero-content">
                    <h1 className='display-5 text-body-emphasis d-md-none'>
                        Cook From Anywhere, Sell From <span className="delicious">
                            Anywhere
                        </span>
                    </h1>
                    <h1 className="display-5 text-body-emphasis d-none d-md-block">
                        Craving Something <span className='delicious'>
                        Delicious?</span> Get it delivered Fast
                    </h1>
                    <p className="lead">
                        Explore local restaurants and get food delivered fast and fresh. Our job is to satisfy your cravings with and fast and quality delivery.
                    </p>
                    <div className="d-grid gap-2 d-md-flex hero-btn">
                    <a href="https://chat.whatsapp.com/IMhX7SXWv9n3CEpzaFnjds" target='_blank' rel='noreferrer'>
                        <button type="button" className="order-btn">
                            Order Now
                        </button>
                    </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Hero;