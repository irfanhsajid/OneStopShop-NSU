import React from 'react';
import { Carousel } from 'react-bootstrap';
import './banner.css';
import sacnac from '../../../images/sacnac.jpg';
import canteen from '../../../images/canteen.jpg';
import library from '../../../images/library.jpg';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div className=" my-2">

            <Carousel fade>
                <Carousel.Item interval={1800}>
                    <img
                        className="d-block w-100 banner-img"
                        src={library}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <div data-aos="zoom-in-left" data-aos-duration="1000" className="banner-div">
                            <div className="text-light">   <h1 className="slider-title">CAMPUS LIBRARY</h1>
                                <p className="my-3"> In touch with your heart. Let's get our hands dirty.</p>
                            </div>
                            <Link to="/products"> <button className=" banner-btn  rounded-1">Shop Now</button></Link>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={1500} >
                    <img
                        className="d-block w-100 banner-img"
                        src={sacnac}
                        alt="First slide"
                    />
                    <Carousel.Caption >

                        <div data-aos="zoom-in-right" className="light">  <h1 className="slider-title">SACNAC <br /> BRIDGE OF LOVE</h1>
                            <p p className="my-3"> A field of clay touched by the genius of man beconmes a castle </p>
                        </div>
                        <Link to="/products"> <button className=" banner-btn  rounded-1">Shop Now</button></Link>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={1800} >
                    <img
                        className="d-block w-100 banner-img"
                        src={canteen}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <div data-aos="zoom-in-left" className="banner-div3">
                            <div className="text-light">
                                <h1 className="slider-title">NSU CANTEEN</h1>
                                <p className="my-3"> In touch with your heart. Let's get our hands dirty.</p>
                            </div>
                            <Link to="/products"> <button className=" banner-btn  rounded-1">Shop Now</button></Link>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

        </div>
    );
};

export default Banner;