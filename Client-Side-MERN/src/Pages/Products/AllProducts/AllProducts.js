import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { RatingView } from 'react-simple-star-rating';
import useAuth from '../../Login-Register/Hooks/useAuth';
import Footer from '../../Shared/Footer/Footer';
import NavBar from '../../Shared/NavBar/NavBar';

const AllProducts = () => {
    const { isLoading } = useAuth();
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://one-stop-shop-api.vercel.app/products', {
            credentials: 'include'
        })
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);
    return (
        <>

            <NavBar />

            <div className="container my-5">
                <div data-aos="fade-down-right" data-aos-duration="1000" className="container my-5 text-center">
                    <div className=" my-4">
                        <h2 className="title-bold-text">Meet Your Hardware Aceessories Here</h2>
                    </div>
                    <p className="text-muted">All the products are amazing.! We Provide the best quality of vases. Definitely, <br /> You will be pleased with our products. Just Drop a call for any products. <br /> We will provide this to your doorstep within an hour.<br />
                    </p>
                    <p className="border-bottom d-flex mx-auto border-2 my-3 w-75"></p>
                </div>
                {
                    isLoading && <Spinner animation="border" />
                }
                <div className="row g-4 justify-content-center">
                    {

                        products.map(product =>
                            <div key={product._id} className="col-12 col-md-4 text-center ">

                                <div data-aos="zoom-in" data-aos-duration="500" className="h-100 card-container shadow-lg rounded-3 ">

                                    <div className="img-container">
                                        <img src={product.img} alt="products img" style={{}} className="card-img img-fluid" />
                                    </div>

                                    <div className="card-body">
                                        <h3 className="card-title fw-bold text-dark">{product.name}</h3>
                                        <div className="card-text">
                                            <RatingView ratingValue={product.rating} /* RatingView Props */ /> <br />
                                            <b className="text-dark">Price : {product.price}.00 /-</b>  &nbsp; &nbsp;
                                        </div>
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
            <Footer />
        </>
    );
};

export default AllProducts;