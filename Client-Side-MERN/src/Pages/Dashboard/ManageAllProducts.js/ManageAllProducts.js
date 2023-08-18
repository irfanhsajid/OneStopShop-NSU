import React, { useEffect, useState } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import { RatingView } from 'react-simple-star-rating';
import swal from 'sweetalert';
import useAuth from '../../Login-Register/Hooks/useAuth';
const ManageAllProducts = () => {
    const [products, setProducts] = useState([]);
    const [isDeleted, setIsDeleted] = useState(null);
    useEffect(() => {
        fetch('http://localhost:3000/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [isDeleted]);
    //delete method 
    const handleDelete = (id) => {
        console.log(id);
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this Product!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    swal("Poof! Your Product has been deleted!", {
                        icon: "success",
                    });
                    fetch(`http://localhost:3000/deleteProduct/${id}`, {
                        method: "DELETE",
                        headers: { "content-type": "application/json" }
                    })
                        .then(res => res.json())
                        .then(result => {
                            // console.log(result.deletedCount)
                            if (result.deletedCount) {
                                setIsDeleted(true)
                            }
                            else {
                                setIsDeleted(false)
                            }
                        });
                } else {
                    swal("Your Product is unchanged!");
                }
            });
    };
    let { path, url } = useRouteMatch();
    const { admin } = useAuth();
    return (
        <>

            <div className="container my-5">
                <div data-aos="fade-down-right" data-aos-duration="1000" className="container my-5 text-center">
                    <div className=" my-4">
                        <h2 className="title-bold-text">We Have total <span className="text-danger">{products.length}</span> Products</h2>
                    </div>
                    <p className="border-bottom d-flex mx-auto border-2 my-3 w-75"></p>
                </div>

                <div className="row g-4 justify-content-center">
                    {

                        products.map(product =>

                            <div key={product._id} className="col-6 col-md-3 text-center ">

                                <div data-aos="flip-up" data-aos-duration="500" className="h-100 card-container shadow-lg rounded-3 ">

                                    <div className="img-container">
                                        <img src={product.img} alt="products img" style={{}} className="card-img img-fluid" />
                                    </div>

                                    <div className="card-body">
                                        <h3 className="card-title fw-bold text-dark">{product.name}</h3>
                                        <div className="card-text">
                                            <RatingView ratingValue={product.rating} /* RatingView Props */ /> <br />

                                        </div>
                                        <button onClick={() => handleDelete(product?._id)} className="banner-btn border-1 rounded-1 mt-2">Delete</button>
                                        {
                                            admin && <>
                                                <Link to="/addProduct">
                                                    <button className="btn btn-warning border-1 rounded-1 ms-2">Update</button>
                                                </Link>
                                            </>
                                        }
                                    </div>
                                </div>

                            </div>
                        )
                    }
                </div>
            </div>
        </>
    );
};

export default ManageAllProducts;