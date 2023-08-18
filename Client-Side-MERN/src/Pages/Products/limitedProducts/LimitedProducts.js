import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { RatingView } from 'react-simple-star-rating';
import './products.css';
// ..
AOS.init();
const LimitedProducts = () => {
    const [products, setProducts] = useState([]); 
    useEffect(() => {
        fetch('https://one-stop-shop-api.vercel.app/products',{
            credentials:'include'
        })
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);
    return (

        <div className="container-fluid my-5">
            <div data-aos="fade-right" data-aos-duration="1000" className="container my-5">
                <div className="border-start border-3 border-dark my-4">
                    <h2 className=" ms-3 abt-title">Trending, <span className="title-bold-text">Most Useful <br />
                        Robotics And</span> Hardware <br /> Accessories.</h2>

                </div>
                <small className="text-muted">All the potteries are amazing.! We Provide the best quality of vases. Definitely, <br /> You will be pleased with our products. Just Drop a call for any products. <br /> We will provide this to your doorstep within an hour.<br />
                </small>
            </div>
            <div className="row g-4 justify-content-center">
                {

                    products.slice(0, 6).map(product =>
                        <div key={product._id} className="col-12 col-md-4 text-center">

                            <div className=" h-100 card-container   rounded-3">

                                <div data-aos="zoom-in-up" data-aos-duration="1000" className="img-container">
                                    <img src={product.img} alt="products img" className="card-img img-fluid" />
                                </div>

                                <div className="card-body text-center">
                                    <h3 className="card-title fw-bold text-dark">{product.name}</h3>
                                    <div className="card-text">

                                        <RatingView ratingValue={product.rating} /* RatingView Props */ /> <br />


                                        <b className="text-dark">Price : {product.price}.00 /-</b>  &nbsp; &nbsp;

                                    </div>
                                    <Link to='/products'>
                                        <button className="card-btn border-1 rounded-1 mt-2 me-3 explore-btn">Explore More </button>
                                    </Link>
                                    <Link to={`productDetails/${product._id}`}>
                                        <button className="add-cart-btn border-1 rounded-1 mt-2">+ Add To Cart</button>
                                    </Link>

                                </div>
                            </div>

                        </div>


                    )
                }
            </div>
        </div>
    );
};

export default LimitedProducts;