import React from 'react';
import "./Facilities.css";

const Facilities = () => {
  return (
    <div>
      <h2 className='d'>THE FACILITIES PROVIDED</h2>
    <div className="facilities-container">
      {/* Section 1 */}
      <div className='mt-5 pb-4 section facility'>
        <img src={require("./gallery/img6facility.jpeg")} alt="facilities" />
        <div className='ms-4 me-3 disttext content'>
          <p><b>PROPER WORK AREA</b></p>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
           Proper charging infrastructure for each individual,proper cupboard facilities,proper tables areas are provided with good ergonomics and proper lighting area, if anything is defective will be replaced without any question.
          </p>
        </div>
      </div> 
    </div>

    <div className="facilities-container">
      {/* Section 2 */}
      <div className='mt-5 pb-4 section facility'>
      <div className='ms-4 me-3 disttext content'>
          <p><b>GYM AREA</b></p>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            A well facilitated and established  proper gym facility is available 24/7 inside the hostel available separate for both men and women separately for supporting the fitness of the individuals.
          </p>
        </div>
        <img src={require("./gallery/img7gym.jpeg")} alt="gym img" />
        
      </div>  
    </div>
    <div className="facilities-container">
      {/* Section 3 */}
      <div className='mt-5 pb-4 section facility'>
        <img src={require("./gallery/img8.jpg")} alt="wifi" />
        <div className='ms-4 me-3 disttext content'>
          <p><b>PROPER NETWORK</b></p>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            Network is an essential factor for both as a student and working professional so unlimited wifi is provided without any additional charges to meet the individuals needs. 
          </p>
        </div>
      </div> 
    </div>

    <div className="facilities-container">
      {/* Section 4 */}
      <div className='mt-5 pb-4 section facility'>
      <div className='ms-4 me-3 disttext content'>
          <p><b>PARKING FACILITY</b></p>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            Safe and weather protective parking facility is provided for everyone so that they can be comfortable without any stress about their belongings.
          </p>
        </div>
        <img src={require("./gallery/img9park.jpeg")} alt="parking facility" />
        
      </div>  
    </div>
    <div className="facilities-container">
      {/* Section 5 */}
      <div className='mt-5 pb-4 section facility'>
        <img src={require("./gallery/img10gen.jpg")} alt="generator" />
        <div className='ms-4 me-3 disttext content'>
          <p><b>UNINTERRUPTED POWERSUPPLY</b></p>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            As everyone has important works to do like from writing placement exam for a company or imprtant business mettings ,we value our customers as there fulfillment is our priority.
          </p>
        </div>
      </div> 
    </div>

    <div className="facilities-container">
      {/* Section 6 */}
      <div className='mt-5 pb-4 section facility'>
      <div className='ms-4 me-3 disttext content'>
          <p><b>PROPER DRINKING FACILITY</b></p>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            Proper and safe drinking water with proper well functioning and well maintained hot,cold and normal water dispenser is available on each floor .
          </p>
        </div>
        <img src={require("./gallery/img11.jpg")} alt="filter" />
        
      </div>  
    </div>
  </div>
  );
};

export default Facilities;