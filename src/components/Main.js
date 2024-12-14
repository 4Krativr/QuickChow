import '../styles/main.scss';
import { customerReview } from '../data/customerData';
import { useEffect, useState } from 'react';
import '../styles/general-styles.scss';
import 'animate.css';
import womanOrder from '../assets/main-images/order-food-img.svg';
import riders from '../assets/main-images/delivery-img.svg';
import waiters from '../assets/main-images/good-quality-img.svg';
import reviewsImg from '../assets/main-images/chef-img.png'
import leftArrow from '../assets/main-images/left-arrow.png';
import rightArrow from '../assets/main-images/right-arrow.png';
import appleStore from '../assets/download-images/apple-icon.png';
import playStore from '../assets/download-images/playstore-icon.png';
import leaf from '../assets/reviewImages/leaf-img.png';
import onion from '../assets/reviewImages/onion.svg';
import rightLink from '../assets/main-images/right-arrow-link.png';
import customer1 from '../assets/reviewImages/customer.svg';
import customer2 from '../assets/reviewImages/customer-2.svg';
import customer3 from '../assets/reviewImages/Ellipse 8.svg';



//This website was created using bootstrap, the layout is and spacing contains a mixture of custom css and bootstrap css.  The font and color was created using custom css.


//This function renders the HTML generated when the arrow function is clicked.
function Main(){
    let count = 0;
    function reviews() {
        const customerLength = customerReview.length - 1;
        let reviewsCount = customerReview[count];

        if (reviewsCount) {
            return generateReview(reviewsCount);
        } else if (count >= customerLength) {
            count = 0;
            reviewsCount = customerReview[count];
            return generateReview(reviewsCount);
        }
    }

    //This function takes a perimeter which generates the HTML for the customer reviews.
    function generateReview(reviews){
        return `
                <p class="lead">
                   ${reviews.review}
                </p>
                <div class="customer-reviews">
                    <div class="customer-reviews-content">
                        <img src=${reviews.profilePic} alt="A customer profile" />
                        <div>
                            <h6>${reviews.name}</h6>
                            <p>${reviews.class}</p>
                        </div>
                    </div>
                    <div class="star-rating">
                    <img src=${reviews.star} alt='star rating'/>
                        <p>4.8</p>
                    </div>
                </div>
            `
    }
    //The useEffect hook manages and rerenders the content on the web page
    useEffect(() => {
        document.querySelector('.js-review-content').innerHTML = reviews()
        const handleClick = (move) => {
            const customerLength = customerReview.length - 1;
            if(move === '>'){
                count++;
            }
            else if(move === '<'){
                if(count === 0){
                    count = customerLength;
                }
                else{
                    count--;
                }
            }
            document.querySelector('.js-review-content').innerHTML = reviews()
        }
        const handleRightClick = () => handleClick('>');
        const handleLeftClick = () => handleClick('<');
        //This  block of code targets the arrow buttons on the page. It gets the elements and adds and removes event listeners to avoid unexpected errors.
        const rightArrow = document.querySelector('.js-right-arrow');
        const leftArrow = document.querySelector('.js-left-arrow')
        rightArrow?.addEventListener('click', handleRightClick);
        leftArrow?.addEventListener('click', handleLeftClick);
        return () => {
            rightArrow?.removeEventListener('click', handleRightClick);
            leftArrow?.removeEventListener('click', handleLeftClick);
        };
    }, []);
    return(
        <main>
            <section className= "container services" id='services'>
                <div className="services-title">
                    <h4>WHAT WE SERVE</h4>
                    <h1>Your Favourite Food Delivery Partner</h1>
                </div>
                <div className="row g-5 py-5 row-cols-1 row-cols-lg-3 mt-3 services-content">
                    <div className="feature col">
                        <img src={womanOrder} alt="delivery" className='service-img'/>
                        <h3 className="fs-3 text-body-emphasis">Easy To Order</h3>
                        <p>
                            It only takes a few steps to order delicious meals from our mobile app.
                        </p>
                        <a href="">
                            Get Started
                            <img src={rightLink} alt="arrow link" className='right-arrow-link'/>
                        </a>
                    </div>
                    <div className="feature col">    
                        <img src={riders} alt="delivery" className='service-img'/>
                        <h3 className="fs-3 text-body-emphasis">Fast Delivery</h3>
                        <p>
                        Experience lightning-fast delivery that brings your favorite meals to your doorstep in no time.
                        </p>
                        <a href="">
                            Get Started
                            <img src={rightLink} alt="arrow link" className='right-arrow-link'/>
                        </a>
                    </div>
                    <div className="feature col">
                        <img src={waiters} alt="delivery" className='service-img'/>
                        <h3 className="fs-3 text-body-emphasis">Best Quality</h3>
                        <p>
                        Savor every bite with top-quality food, made from the freshest ingredients.
                        </p>
                        <a href="">
                            Get Started
                            <img src={rightLink} alt="arrow link" className='right-arrow-link'/>
                        </a>
                    </div>
                </div>
            </section>

            <section className="reviews container" id='reviews'>
                <div className="row g-5 py-5 reviews-box">
                    <div className="col-lg-6 reviews-img-div">
                        <img src={reviewsImg} className="reviews-img" alt="quickchow review" loading="lazy"/>
                        <div className="floating-leaf">
                            <img src={leaf} alt="a leaf" />
                        </div>
                        <div className="floating-leaf-2">
                            <img src={leaf} alt="a leaf" />
                        </div>
                        <div className="floating-onion">
                            <img src={onion} alt="An onion image" />
                        </div>
                        <div className="floating-onion-2">
                            <img src={onion} alt="An onion image" />
                        </div>
                        <div className="customer-count">
                            <h1>Our Reviews</h1>
                            <div className='customers'>
                                <img src= {customer1} alt="A customer"/>
                                <img src= {customer2} alt="A customer" className='left'/>
                                <img src= {customer3} alt="A customer" className='left'/>
                                <div className="count-customers left">12k+</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 reviews-content">
                        <div className="reviews-title">
                            <h4>WHAT THEY SAY</h4>
                            <div className="reviews-title-arrows">
                                <div className="left-arrow js-left-arrow">
                                    <img src={leftArrow} alt="left arrow icon" />
                                </div>
                                <div className="right-arrow js-right-arrow">
                                    <img src={rightArrow} alt="right arrow icon" />
                                </div>
                            </div>
                        </div>
                        <h1 className="mb-3">What Our Customers Say About Us</h1>
                        <div className='js-review-content'></div>
                    </div>
                </div>
            </section>

            <section className="download  container">
                <div className="row g-5">
                    <div className="col-10 col-sm-8 col-lg-6 download-img"></div>
                    <div className="col-lg-6 download-content">
                        <div className= "download-content-text">
                            <h4>DOWNLOAD APP</h4>
                            <h1 className="mb-3">
                                Get Started With QuickChow Today!
                            </h1>
                        </div>
                        <p className="lead">
                            Discover new meals and get it delivered, whenever and wherever you want.
                        </p>
                        <p className="mb-4">Coming soon!!</p>
                        <div className="gap-3 d-md-flex justify-content-md-start download-btn">
                            <a href="https://play.google.com/store/" target='_black'>
                                <div className='download-container'>
                                    <img src={playStore} alt="Playstore Icon" />
                                    <div className="download-text">
                                        <p>Get it on</p>
                                        <h5>Google Play</h5>
                                    </div>
                                </div>
                            </a>
                            <a href="https://www.apple.com/app-store/" target='_black'>
                                <div className='download-container'>
                                    <img src={appleStore} alt="Apple icon"/>
                                    <div className="download-text">
                                        <p>Download on the</p>
                                        <h5>App Store</h5>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
export default Main;