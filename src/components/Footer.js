import logo from '../assets/quick-chow-logo.png';
import instagram from '../assets/footer-images/bx_bxl-instagram-alt.png';
import facebook from '../assets/footer-images/facebook.png';
import twitter from '../assets/footer-images/twitter.png';
import sendIcon from '../assets/footer-images/send-icon.png';
import '../styles/footer.scss';
function Footer(){
    //This website was created using bootstrap, the layout is and spacing contains a mixture of custom css and bootstrap css.  The font and color was created using custom css.
    return(
        <div className="container footer">
            <footer className="row py-5">
                <div className="mb-3 col-lg-3 socials">
                    <div className="col-3 news-letter d-lg-none">
                        <h5>Stay updated</h5>
                        <p className="lh-5">
                            Subscribe to our newsletter to receive the latest updates on QuickChow and new recipes to try.
                        </p>
                        <div>
                            <p>Email Address</p>
                            <img src={sendIcon} alt="send icon" />
                        </div>
                    </div>
                    <a href="/" className="d-flex align-items-center mb-3 link-body-emphasis text-decoration-none">
                        <img src={logo} alt="" className="footer-logo"/>
                    </a>
                    <p >
                        Cook from anywhere, sell from anywhere.
                    </p>
                    <div className= "socials-icon">
                        <a href="https://www.instagram.com/quickchow.app?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target='_blank' rel='noreferrer'>
                            <img src={instagram} alt="instagram icon" />
                        </a>
                        <a href="https://www.facebook.com/p/QuickChow-61565639611211/">
                            <img src={facebook} alt="instagram icon" />
                        </a>
                        <a href="https://x.com/quickchow_app?s=11">
                            <img src={twitter} alt="instagram icon" />
                        </a>
                    </div>
                </div>
                
                <div className="col-6 d-flex justify-content-around footer-info">
                    <div className="mb-3">
                        <h5>About</h5>
                        <ul className="nav flex-column ul-link">
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 a-link">About Us</a></li>
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 a-link">Features</a></li>
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 a-link">News</a></li>
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 a-link">Menu</a></li>
                        </ul>
                    </div>

                    <div className="mb-3">
                        <h5>Company</h5>
                        <ul className="nav flex-column ul-link">
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 a-link">Why QuickChow</a></li>
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 a-link">Partner With Us</a></li>
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 a-link">FAQs</a></li>
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 a-link">Blog</a></li>
                        </ul>
                    </div>

                    <div className="mb-3">
                        <h5>Support</h5>
                        <ul className="nav flex-column">
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 a-link">Account</a></li>
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 a-link ">Support Center</a></li>
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 a-link">Feedback</a></li>
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 a-link">Contact Us</a></li>
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 a-link">Accessibility</a></li>
                        </ul>
                    </div>
                </div>

                <div className="col-3 mb-3 news-letter d-none d-lg-block">
                    <h5>Stay updated</h5>
                    <p className="lh-5">
                        Subscribe to our newsletter to receive the latest updates on QuickChow and new recipes to try.
                    </p>
                    <div>
                        <p>Email Address</p>
                        <img src={sendIcon} alt="send icon" />
                    </div>
                </div>
            </footer>
        </div>
    )
}
export default Footer