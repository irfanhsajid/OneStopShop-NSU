import React from 'react';
import icon1 from '../../images/icon-img/Icon-image-1.png';
import icon2 from '../../images/icon-img/Icon-image-2.png';
import icon3 from '../../images/icon-img/Icon-image-3.png';
import icon4 from '../../images/icon-img/Icon-image-4.png';
import './Features.css';
const Features = () => {
    return (
        <div className="container-fluid my-5 p-4">
            <div className="">
                <div className="row justify-content-center  ">
                    <div className="col-6 col-md-3 d-flex feature-card align-items-center" data-aos="flip-left" data-aos-easing="ease-out-cubic"
                        data-aos-duration="1500" >
                        <div className="img me-2">
                            <img className="img-fluid" src={icon1} alt="" />
                        </div>
                        <div className="text mt-2">
                            <h6>24/7 SUPPORT</h6>
                        </div>
                    </div>
                    <div className="col-6 col-md-3 d-flex feature-card align-items-center" data-aos="zoom-in-down" data-aos-duration="1000" >
                        <div className="img me-2">
                            <img className="img-fluid" src={icon2} alt="" />
                        </div>
                        <div className="text mt-2">
                            <h6>QUICK SHIPPING</h6>
                        </div>
                    </div>
                    <div className="col-6 col-md-3 d-flex feature-card align-items-center" data-aos="zoom-in-up" data-aos-duration="1500">
                        <div className="img me-2">
                            <img className="img-fluid" src={icon3} alt="" />
                        </div>
                        <div className="text mt-2">
                            <h6>SECURED PAYMENT</h6>
                        </div>
                    </div>
                    <div className="col-6 col-md-3 d-flex feature-card align-items-center" data-aos="flip-right" data-aos-easing="ease-out-cubic"
                        data-aos-duration="1500" >
                        <div className="img me-2">
                            <img className="img-fluid" src={icon4} alt="" />
                        </div>
                        <div className="text mt-2">
                            <h6>SPECIAL OFFERS</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Features;