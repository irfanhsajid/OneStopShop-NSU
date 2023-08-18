import React, { useState } from 'react';
import swal from 'sweetalert';
import useAuth from '../../Login-Register/Hooks/useAuth';
import './review.css';
const AddReview = () => {
    const { user } = useAuth();
    const [inputData, setInputData] = useState({});
    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...inputData };
        newLoginData[field] = value;
        console.log(newLoginData);
        setInputData(newLoginData);
    }
    const handleReviewSubmit = (e) => {
        e.preventDefault();
        fetch(`http://localhost:5000/addReview`, {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(inputData),
        })
            .then(res => res.json())
            .then(result => console.log(result))
        console.log(inputData);
        swal("Thank You", "Your Review Submitted!", "success");
        e.target.reset();
    }

    return (
        <div className="text-center">
            <h2 data-aos="fade-right" data-aos-duration="1000" className="fw-bold">Feel Free to Review Our Products </h2>
            <p className="border-bottom border-2 my-3 d-flex mx-auto w-75"></p>
            <div className="review-form form-bg py-2  ">
                <form className="form-container" onSubmit={handleReviewSubmit}>
                    <select required onBlur={handleOnBlur} className="px-4 py-2 m-2 border-0  rounded-1" name="userName" id="">
                        <option selected disabled>Your Name</option>
                        <option value={user?.displayName}> {user?.displayName} </option>
                    </select>
                    <br />
                    <select required onBlur={handleOnBlur} className="px-4 py-2 m-2 border-0  rounded-1" name="productName" id="">
                        <option selected disabled>Product Name</option>
                        <option value="Marble Vase">Marble Vase</option>
                        <option value="Terrakota Vase">Terrakota Vase</option>
                        <option value="Tea Pots">Tea Pots</option>
                        <option value="River Vase">River Vase</option>
                        <option value="Metal Vase">Metal Vase</option>
                        <option value="Italian Pots">Italian Pots</option>
                        <option value="High Vase">High Vase</option>
                        <option value="Ethnic Pot">Ethnic Pot</option>
                        <option value="Ceylon Vase">Ceylon Vase</option>
                        <option value="Antic Vase">Antic Vase</option>
                        <option value="Bamboo Vase">Bamboo Vase</option>
                    </select>
                    <br />

                    <select onBlur={handleOnBlur} className="px-4 py-2 m-2 border-0  rounded-1" name="rate" id="" required>
                        <option selected disabled>Rate Product</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="3.5">3.5</option>
                        <option value="4">4</option>
                        <option value="4.5">4.5</option>
                        <option value="5">5</option>
                    </select>
                    <br />
                    <textarea onBlur={handleOnBlur} className=" px-4 py-2 m-2 border-0  rounded-1" name="review" id="" cols="15" rows="5" placeholder="Share your opinion here..." required></textarea> <br />
                    <input type="submit" value="SUBMIT" className=" btn-light my-1 border-0 px-4 py-2 fw-bold rounded-1" style={{ letterSpacing: '2px' }}></input>
                </form>
            </div>
        </div>
    );
};

export default AddReview;