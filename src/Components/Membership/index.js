import React from 'react';
import Footer from '../../Containers/Footer';
import './style.css';
import { Link } from 'react-router-dom';

function Membership() {
    return (
        <div>
        <div className="membership">
            <div className="membership-left">
              
               <h3>Rolling Yearly</h3>

               <ul className="deafult">
               <li>
                   <p>One year's Standard - ....</p>
               </li>
               <li>
                   <p>Two year's Standard - ....</p>
               </li>
               <li>
                   <p>Three year's Standard - ....</p>
               </li>
               <li>
                   <p>Five year's Standard - ....</p>
               </li>
               </ul>
            </div>
            <div className="membership-right">
                 <h3>Rolling Monthly</h3>
                 
               <ul className="deafult">
               <li>
                   <p>1 Month's - ....</p>
               </li>
               <li>
                   <p>3 Month's - ....</p>
               </li>
               <li>
                   <p>6 Month's - ....</p>
               </li>
               <li>
                   <p>9 Month's - ....</p>
               </li>
               </ul>
              </div>
         </div>
           <div className="membership-buttom">
               {/* <Link><button>Join Us Today</button></Link> */}
               <Link  to="/membership/join-us-today"> <button>Join Us Today</button> </Link>
           </div>

              <Footer />
        </div>
    )
}

export default Membership;
