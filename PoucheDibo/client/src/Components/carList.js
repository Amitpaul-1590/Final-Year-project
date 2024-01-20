import React from 'react'
import Car_image1 from "../assets/images/car1.jpg";
import Car_image2 from "../assets/images/car2.jpg";


export const carList = () => {
  return (
    <div className="card">
    <div className="upper-part">
      
    <iframe
        title="Google Map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d158858.85367075275!2d-122.4194156945246!3d37.77492950762578!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808f7e7c4ba44e69%3A0x52f4df4f725c6317!2sGolden%20Gate%20Bridge!5e0!3m2!1sen!2sus!4v1641334058910!5m2!1sen!2sus"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
      ></iframe>
    </div>
    <div className="lower-part">
      <ul className="car-list">
        <li className="car-item">
          <img src={Car_image1} alt="Car 1" className="car-image"/>
          <span><a href=" ">ED STREET TEXI</a></span>
          <button class="BookNowbutton"><a href="">Book Now</a></button>
        </li>
        <li className="car-item">
          <img src={Car_image2} alt="Car 2" className="car-image"/>
          <span><a href=" ">ED STREET TEXI</a></span>
          <button class="BookNowbutton"><a href="">Book Now</a></button>
        </li>

        <li className="car-item">
            <img src={Car_image2 } alt="Car 2" className="car-image"/>
            <span><a href="# ">ED STREET TEXI</a></span>
            <button class="BookNowbutton"><a href="">Book Now</a></button>
        </li>
          
    
      </ul>
    </div>
  </div>
  )
}


export default carList
