import '../styles/main.scss';
import { customerReview } from '../data/customerData';
import { useEffect } from 'react';
import '../styles/general-styles.scss';
import 'animate.css';
import womanOrder from '../assets/main-images/Order food-pana 1.svg';
import riders from '../assets/main-images/Take Away-rafiki 1.svg';
import waiters from '../assets/main-images/Waiters-rafiki 1.png';
import reviewsImg from '../assets/main-images/chef-img.png'
import leftArrow from '../assets/main-images/left-arrow.png';
import rightArrow from '../assets/main-images/right-arrow.png';
import starRating from '../assets/main-images/stars-ratings.png';
import customerImg from '../assets/main-images/Ellipse 9.png';
import appleStore from '../assets/download-images/apple-icon.png';
import playStore from '../assets/download-images/playstore-icon.png';



//This website was created using bootstrap, the layout is and spacing contains a mixture of custom css and bootstrap css.  The font and color was created using custom css.

//PS: Do not touch the javascipt code i commented out, make wahala no dey. ha, ha, ha.
function Main(){
    
    // let count = 0;
    // function reviews(index){
    //     const customerLength = customerReview.length - 1;
    //     const reviewsCount = customerReview[index];
    //     if(customerLength === index){
    //         count = 0;
    //         console.log('ys')
    //     }else{
    //         console.log('nio')
    //         const reviewHTML = `
    //             <p className="lead">
    //                 ${reviewsCount.review}
    //             </p>
    //             <div className="customer-reviews">
    //                 <div className="customer-reviews-content">
    //                     <img src=${reviewsCount.profilePic} alt="A customer profile" />
    //                     <div>
    //                         <h6>${reviewsCount.name}</h6>
    //                         <p>${reviewsCount.class}</p>
    //                     </div>
    //                 </div>
    //                 <div className="star-rating">
    //                     <img src=${reviewsCount.starRating} alt="star" /> 
    //                     <p>4.8</p>
    //                 </div>
    //             </div>
    //         `
    //         return reviewHTML
    //     }
    // }
    // useEffect(() => {
    //     document.querySelector('.js-review-content').innerHTML = reviews(count)
    //     const handleClick = () => {
    //         count++
    //         document.querySelector('.js-review-content').innerHTML = reviews(count)
    //         console.log('fish')
    //     }
    //     const rightArrow = document.querySelector('.js-right-arrow');
    //     rightArrow?.addEventListener('click', handleClick);
    //     return () => {
    //         rightArrow?.removeEventListener('click', handleClick);
    //     };
    // }, []);
    return(
        <main>
            <section className= "container col-xxl-10 services" id='services'>
                <div className="services-title">
                    <h4>WHAT WE SERVE</h4>
                    <h1>Your Favourite Food Delivery Partner</h1>
                </div>
                <div className="row g-5 py-5 row-cols-1 row-cols-lg-3 services-content mt-3">
                    <div className="feature col">
                        <div className="feature-icon d-inline-flex align-items-center justify-content-center bg-gradient fs-2 mb-3">
                            <img src={womanOrder} alt="delivery" />
                        </div>
                        <h3 className="fs-2 text-body-emphasis mt-3">Easy To Order</h3>
                        <p>
                            It only takes a few steps to order delicious meals from our mobile app.
                        </p>
                    </div>
                    <div className="feature col">
                        <div className="feature-icon d-inline-flex align-items-center justify-content-center bg-gradient fs-2 mb-3">
                            <img src={riders} alt="delivery" />
                        </div>
                        <h3 className="fs-2 text-body-emphasis">Fast Delivery</h3>
                        <p>
                            We priotize speed, trust, and convenience, capturing the essence of quick, dependable delivery service.
                        </p>
                    </div>
                    <div className="feature col">
                        <div className="feature-icon d-inline-flex align-items-center justify-content-center bg-gradient fs-2 mb-3">
                            <img src={waiters} alt="delivery" />
                        </div>
                        <h3 className="fs-2 text-body-emphasis">Best Quality</h3>
                        <p>
                        We don't just offer fast delivery, quality is also important to us, that's why our catalogue is filled with the best meals from your favourite restaurants.
                        </p>
                    </div>
                </div>
            </section>

            <section className="reviews container col-xxl-10" id='reviews'>
                <div className="row g-5 py-5 reviews-box">
                    <div className="col-lg-6 reviews-img-div">
                        <img src={reviewsImg} className="d-block mx-lg-auto img-fluid reviews-img" alt="quickchow review" loading="lazy"/>
                    </div>
                    <div className="col-lg-6 reviews-content">
                        <div className="reviews-title">
                            <h4>WHAT THEY SAY</h4>
                            <div className="reviews-title-arrows">
                                <div className="left-arrow">
                                    <img src={leftArrow} alt="left arrow icon" />
                                </div>
                                <div className="right-arrow js-right-arrow">
                                    <img src={rightArrow} alt="right arrow icon" />
                                </div>
                            </div>
                        </div>
                        <h1 className="mb-3">What Our Customers Say About Us</h1>
                        <div className='js-review-content'>
                            <p className="lead">
                                "QuickChow is the best. I’m honestly blown away by the speed and reliability of this food delivery service! My order arrived well before the estimated time, and everything was still fresh and hot. The app was super easy to use, and I appreciated the real-time tracking feature, so I knew exactly when to expect my food."
                            </p>
                            <div className="customer-reviews">
                                <div className="customer-reviews-content">
                                    <img src={customerImg} alt="A customer profile" />
                                    <div>
                                        <h6>Pastor Chizurum</h6>
                                        <p>Food Enthusiast</p>
                                    </div>
                                </div>
                                <div className="star-rating">
                                    <img src={starRating} alt="star" /> 
                                    <p>4.8</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="download  container col-xxl-10">
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
                                <div>
                                    <img src={playStore} alt="Playstore Icon" />
                                    <p>Google Play</p>
                                </div>
                            </a>
                            <a href="https://www.apple.com/app-store/" target='_black'>
                                <div>
                                    <img src={appleStore} alt="Apple icon"/>
                                    <p>App Store</p>
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