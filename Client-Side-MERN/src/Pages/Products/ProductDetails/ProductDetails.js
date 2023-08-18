import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import { RatingView } from 'react-simple-star-rating';
import swal from 'sweetalert';
import useAuth from '../../Login-Register/Hooks/useAuth';
import NavBar from '../../Shared/NavBar/NavBar';
import './Details.css';
const ProductDetails = () => {
    const { user, isLoading } = useAuth();
    const { productId } = useParams();
    const [product, setProduct] = useState([]);
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    useEffect(() => {
        fetch('http://localhost:3000/products')
            .then(res => res.json())
            .then(data => setProduct(data))
    }, []);
    const detailsInfo = product.filter(data => data._id === productId);

    const onSubmit = data => {
        fetch(`http://localhost:3000/addOrder`, {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(data),
        })
            .then(res => res.json())
            .then(result => {
                console.log(result)
                swal("Thanks For Order!", "You Product is added to Dashboard", "success");
            })
        console.log(data);

        reset();
    }
    return (
        <div className="container">

            {
                isLoading && <Spinner animation="border" />
            }

            <NavBar />
            <div className="details-container my-5 row g-4 justify-content-center">
                <div className="details-left col-12 col-md-5">
                    <div className=" w-100">
                        <img className="img-fluid details-img" src={detailsInfo[0]?.img} alt="" />
                    </div>
                </div>
                <div className="details-right  col-12 col-md-7">
                    <h1 className="title fw-bold text-center">{detailsInfo[0]?.name}</h1>
                    <p className="border-bottom border-2 d-flex mx-auto w-50"></p>
                    <RatingView ratingValue={detailsInfo[0]?.rating} /* RatingView Props */ />
                    <p className="">{detailsInfo[0]?.details}.</p>
                    <div className="text-center">
                        <p><b>Price : </b><span className="text-danger">{detailsInfo[0]?.price}.00 /-</span></p>
                        <p><small>Only {detailsInfo[0]?.stock}+ in stock</small></p>
                        <p><b>Brand : </b> {detailsInfo[0]?.brand} </p>
                    </div>
                    <p className="border-bottom border-2 d-flex mx-auto w-75"></p>
                    <div>
                        <h5 className="fw-bold text-center">SURE TO BUY? <span className="text-danger">FILL</span> THE FORM AND <span className="text-danger">PRESS</span> THE BUTTON</h5>
                    </div>
                    <div className="order-form" >
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <select {...register("productName", { required: true })} className="px-3 py-2 m-2 w-100">
                                <option selected disabled>Select Product</option>
                                <option value={detailsInfo[0]?.name}>{detailsInfo[0]?.name}</option>
                            </select>
                            <input
                                {...register("price", { required: true })}
                                placeholder=""
                                value={detailsInfo[0]?.price}
                                className="px-3 py-2 m-2 w-100"
                            />
                            <br />
                            <input
                                {...register("email")}
                                required type='email'
                                value={user.email}
                                className="px-3 py-2 m-2 w-100"

                            />
                            <br />
                            <input
                                {...register("name", { required: true })}
                                placeholder="Your Name"
                                className="px-3 py-2 m-2 w-100"
                            />
                            <br />

                            <input
                                {...register("phone", { required: true })}
                                type="number"
                                placeholder="Phone Number"
                                className="px-3 py-2 m-2 w-100"
                            /> <br />
                            <input
                                {...register("location", { required: true })}
                                placeholder="Receiving Location"
                                className="px-3 py-2 m-2 w-100"
                            />
                            <br />
                            <input
                                {...register("payment", { required: true })}
                                value={"Cash On Delivary"}
                                className="px-3 py-2 m-2 w-100"
                            />
                            <br />
                            {/* <select {...register("payment", { required: true })} className="px-3 py-2 m-2 w-100">
                                <option value="VisaCard">VisaCard</option>
                                <option value="bKash">bKash</option>
                                <option value="Nagad">Nagad</option>
                                <option value="uPay">uPay</option>
                            </select>
                            <br /> */}
                            {errors.exampleRequibKash && <span>This field is required! </span>}
                            <input type="submit" value="Place Order" className=" ms-2 w-100 btn btn-dark text-center px-3 py-2 my-3" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;