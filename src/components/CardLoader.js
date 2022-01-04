import React from 'react';

import './CardLoader.css';

const CardLoader = () => {
   return (
      <div className="col-md-4 mb-3">
         <div className="card skeleton">
            <div className=" card-img-top user-cover"></div>
            <div className="user-details">
               <div className="user-name hide-text">Anamika Roy</div>
            </div>
            {/* <button className="contact-user hide-text">CONTACT</button> */}
         </div>
      </div>
   );
};

export default CardLoader;
