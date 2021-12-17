import React from 'react';
import Footer from '../../Containers/Footer';
import './style.css';

function Programs() {
    return (
        <div className="programs">

            <div className="programs-top">
             <h1>Membership Benefits Include</h1>
             </div>

             <div className="programs-buttom">
                <div className="programs-equipment">
                  <h3>Equipment</h3>
                  <ul>
                    <li>treadmills</li>
                    <li>free weights</li>
                    <li>exercise cycles</li>
                    <li>rowing machines</li>
                    <li>racks</li>
                    <li>cable crossovers</li>
                    <li>kettlebells</li>
                    <li>treadmills</li>
                  </ul>
               </div>
              <div className="programs-lifestyle">
                <h3>Lifestyle</h3>
                <ul>
                    <li>personal training</li>
                    <li>online classes</li>
                    <li>team workouts</li>
                    <li>yoga classes</li>
                    <li>cardio classes</li>
                    <li>zumba classes</li>
                  
                </ul>
              </div>
              <div className="programs-services">
                <h3>Services</h3>
                <ul>
                    <li>private sanitized showers</li>
                    <li>private sanitized restrooms</li>
                    <li>worldwide club Access</li>
                    <li>private restrooms</li>
                    <li>private showers</li>
                    <li>health plan discounts</li>
                    <li>24-hour access</li>
                    <li>24-hour security</li>
                  </ul>
               </div>
 
            </div>
 
             <div className="conaiter-info">
                 <samp>*Each of our gyms is unique to the community it serves. Contact your local gym for details</samp>
             </div>
             
             {/* <h2>PARTNERSHIP DISCOUNTS</h2> */}
             <div className="partnership"> <h2>PARTNERSHIP DISCOUNTS</h2></div>

           <div className="p-discounts">
           <div className="offer-visa">
              <img src={require('../../assets/visa.png').default} alt="visa" /> 
              <h3>Visa</h3>
              <ul>
                  <li>For all Visa Contactless Users .</li>
                  <li>15% discount on Annual Memberships+5 days Fre Trial</li>
                  <li>10% discount on Half Yearly Memberships</li>
                  <li>Visa Card users eligible to redeem the offer</li>
                  <li>Valid Till , 30th September 2021</li>
              </ul>
           </div>  
           <div className="offer-rupay">
              <img src={require('../../assets/rupay.jpg').default} alt="rupay" /> 
              <h3>Rupay</h3>
              <ul>
                  <li>For all rupay Contactless Users .</li>
                  <li>15% discount on Annual Memberships+5 days Fre Trial</li>
                  <li>10% discount on Half Yearly Memberships</li>
                  <li>Visa Card users eligible to redeem the offer</li>
                  <li>Valid Till , 30th September 2021</li>
              </ul>
           </div>  
           <div className="offer-mastercard">
              <img src={require('../../assets/mastercard.png').default} alt="master card" /> 
              <h3>Master Card</h3>
              <ul>
                  <li>For all Master Card Contactless Users .</li>
                  <li>15% discount on Annual Memberships+5 days Fre Trial</li>
                  <li>10% discount on Half Yearly Memberships</li>
                  <li>Visa Card users eligible to redeem the offer</li>
                  <li>Valid Till , 30th September 2021</li>
              </ul>
           </div>  
           <div className="offer-icicibank">
              <img src={require('../../assets/icicibank.png').default} alt="icici bank" /> 
              <h3>ICICI Bank</h3>
              <ul>
                  <li>For all icici Card Contactless Users .</li>
                  <li>15% discount on Annual Memberships+5 days Fre Trial</li>
                  <li>10% discount on Half Yearly Memberships</li>
                  <li>Visa Card users eligible to redeem the offer</li>
                  <li>Valid Till , 30th September 2021</li>
              </ul>
           </div>  
           <div className="offer-yesbank">
              <img src={require('../../assets/yesbank.png').default} alt="yes bank" /> 
              <h3>Visa</h3>
              <ul>
                  <li>For all Yes Card Contactless Users .</li>
                  <li>15% discount on Annual Memberships+5 days Fre Trial</li>
                  <li>10% discount on Half Yearly Memberships</li>
                  <li>Visa Card users eligible to redeem the offer</li>
                  <li>Valid Till , 30th September 2021</li>
              </ul>
           </div>  
           <div className="offer-kotakbank">
              <img src={require('../../assets/kotakbank.png').default} alt="kotak bank img" /> 
              <h3>Kotak Bank</h3>
              <ul>
                  <li>For all Kotak Card Contactless Users .</li>
                  <li>15% discount on Annual Memberships+5 days Fre Trial</li>
                  <li>10% discount on Half Yearly Memberships</li>
                  <li>Visa Card users eligible to redeem the offer</li>
                  <li>Valid Till , 30th September 2021</li>
              </ul>
           </div>  
           </div>  
           <Footer />
        </div>
    )
}

export default Programs;
