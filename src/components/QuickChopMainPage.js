import "../styles/mainPage.scss"
import quickchowLogo from '../assets/quick-chow-logo.png';
import iconLogo from "../assets/mainPage-images/iconLogo.png"
import foodimage from "../assets/mainPage-images/foodDiv.png"
import orderFromKitchenImage from "../assets/mainPage-images/image 48.png"
import playstore from "../assets/mainPage-images/playstore.png"
import applestore from "../assets/mainPage-images/applestore.png"
import facebook from "../assets/mainPage-images/facebook-icon.png"
import instagram from "../assets/mainPage-images/instagram-icon.png"
import twitter from '../assets/footer-images/twitter.png'
import dropdownIcon from '../assets/mainPage-images/angle-down.svg'
import location from '../assets/mainPage-images/location-point.svg'


function KitchenAndFood() {
  return(
    <>
        <div id="orderList">
            <img src={foodimage} alt="food" />
            <div id="details">
                <span className="foodName">Fried Rice & Chicken</span>
                <div>
                  <span>Food Mattaz Kitchen</span>
                  <span>N2,500.00</span>
                </div>

                <div className="location dropdown">
                  <img src={location} className="iconSvg" alt="locationIcon" />
                  <div>University of Ilorin</div>
                </div>
                <button className="makeOrder">Buy/Make an Order</button>
            </div>
        </div>
    </>
  )
}

function MainPage() {
 return (
  <>
    <div class="mainHeader">

      <nav className="mainNavBar">
        <img src={quickchowLogo}  alt="logo"/>
        <div className="listItems">
          <li id="serviceList">Services <img src={dropdownIcon} className="service dropdown" alt='dropdowm' />
          <div className="dropdownList">
            <li>--services list--</li>
            <li>--services list--</li>
            <li>--services list--</li>
            <li>--services list--</li>
            <li>--services list--</li>
          </div>
          </li>
          <li>About us</li>
          <li>Testimonials</li>
          <li>Contact</li>
        </div>
        <div className='location dropdown'>
          <img src={iconLogo} alt="logo" id="logo"/>
          <img src={dropdownIcon} className="iconSvg"  alt="angleDown" />
        </div>

        
      </nav>

        <div id="groupItems">
        <span id="kitchenHeader">Kitchens Near You</span>
      <div id="orderInputs">
          {/* <input type="text" placeholder="Select Kitchen"> */}
              <select>
                  <option value=''>Select Kitchen</option>
                  <option value='option1'>--Kitchen Name--</option>
                  <option value='option2'>--Kitchen Name--</option>
                  <option value='option3'>--Kitchen Name--</option>
                  <option value='option4'>--Kitchen Name--</option>
                  
              </select>

              <select>
                  <option value=''>Food Type</option>
                  <option value='option1'>--Food Type--</option>
                  <option value='option2'>--Food Type--</option>
                  <option value='option3'>--Food Type--</option>
                  <option value='option4'>--Food Type--</option>
                  
              </select>
          {/* </input> */}
          {/* <input type="text" placeholder="Food Type"></input> */}
          <button>Search</button>
      </div>
    </div>
      
      
      

    </div>

    <section id="availableKitchenDiv">
        <h2>Available Kitchens</h2>

        <div className="foodGridContainer">
            <KitchenAndFood />
            <KitchenAndFood />
            <KitchenAndFood />
            <KitchenAndFood />
            <KitchenAndFood />
            <KitchenAndFood />
            <KitchenAndFood />
            <KitchenAndFood />
            <KitchenAndFood />
            <KitchenAndFood />
            <KitchenAndFood />
            <KitchenAndFood /> 
            <KitchenAndFood />
            <KitchenAndFood />
            <KitchenAndFood />

        </div>

    </section>


    <section id="getAppDiv">

        <div id="getStarted">
            <h6>DOWNLOAD APP</h6>
            <h3>Get Started With Quickchow Today!</h3>
            <span id="foodText">Discover food wherever andd whenever and get your food delivered quickly.</span>
            
            <div id="downloadStores">
              <span>Coming Soon!</span>
              <div>
                <a href="https://play.google.com/store/"><img src={playstore} alt="playstore" /></a>
                <a href="https://www.apple.com/app-store/"><img src={applestore} alt="applestore" /></a>
              </div>
            </div>

        </div>

        <div>
          <img src={orderFromKitchenImage} alt="img" id="kitchenImage"/>
        </div>

    </section>

    <footer>
      <img src={quickchowLogo} alt="QuickChow" />
      <span>Our job is to fill your tummy with delicious food with fast and free delivery.</span>

            <div id="footerDownloadLink">
                <a href="https://play.google.com/store/"><img src={playstore} alt="playstore" /></a>
                <a href="https://www.apple.com/app-store/"><img src={applestore} alt="applestore" /></a>
            </div>

          <div className="footerNavLinks">
            <div>
              <h2>About</h2>
                <ol>
                  <li>About Us</li>
                  <li>Features</li>
                  <li>News</li>
                  <li>Menu</li>
                </ol>
            </div>

            <div>
            <h2>Company</h2>
                <ol>
                  <li>Why Quickchow?</li>
                  <li>Partner With Us</li>
                  <li>FAQs</li>
                  <li>Blog</li>
                </ol>
            </div>

            <div>
            <h2>Support</h2>
                <ol>
                  <li>Account</li>
                  <li>Support Center</li>
                  <li>Feedback</li>
                  <li>Contact Us</li>
                  <li>Accessibility</li>
                </ol>
            </div>

            <div>
            <h2>Get In Touch</h2>
                <ol>
                  <li>Question or Feedback</li>
                  <li>We'd love to hear from you</li>
                </ol>
            </div>

            <div id="socials">
              {/* <img src={instagram} alt="instagram" />
              <img src={facebook} alt="facebook" /> */}
              <a href="https://www.instagram.com/quickchow.app?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">
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

    </footer>






  </>
  )
}

export default MainPage;