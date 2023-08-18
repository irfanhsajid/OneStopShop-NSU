import React, { useState } from 'react';

import swal from 'sweetalert';
const AddProduct = () => {
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
        fetch(`http://localhost:3000/addProduct`, {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(inputData),
        })
            .then(res => res.json())
            .then(result => console.log(result))
        console.log(inputData);
        swal("Done!", "Successfully Added Product To the Database", "success");
        e.target.reset();
    }

    return (
        <div className="text-center">
            <h2 data-aos="fade-right" data-aos-duration="1000" className="fw-bold">Add a New Product</h2>
            <p className="border-bottom border-2 my-3 d-flex mx-auto w-50"></p>
            <div className="review-form form-bg py-2  ">
                <form className="form-container mt-2" onSubmit={handleReviewSubmit}>
                    <input onBlur={handleOnBlur} className="px-4 py-2 m-2 border-0  rounded-1 " type="text" name="name" id="" placeholder="Product Name" required /> <br />

                    <input onBlur={handleOnBlur} className="px-4 py-2 m-2 border-0  rounded-1 " type="text" name="brand" id="" placeholder="Brand Name" required /> <br />
                    <input onBlur={handleOnBlur} className="px-4 py-2 m-2 border-0  rounded-1 " type="number" name="price" id="" placeholder="Product Price" required /> <br />
                    <input onBlur={handleOnBlur} className="px-4 py-2 m-2 border-0  rounded-1 " type="number" name="stock" id="" placeholder="Availability in Stock" required /> <br />
                    <select required onBlur={handleOnBlur} className="px-4 py-2 m-2 border-0  rounded-1" name="rating" id="">
                        <option value="Add Product Rating" selected disabled>Add Product Rating</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                    <br />
                    <input onBlur={handleOnBlur} className="px-4 py-2 m-2 border-0  rounded-1 " type="text" name="img" id="" placeholder="Product Image URL-( i.e: https://i.ibb.co/River-Vase.jpg)" required /> <br />

                    <textarea onBlur={handleOnBlur} className="px-4 py-2 m-2 border-0  rounded-1" name="details" id="" cols="15" rows="5" placeholder="Product Description" required></textarea> <br />
                    <input type="submit" value="SUBMIT" className=" btn-light my-1 border-0 px-4 py-2 fw-bold rounded-1" style={{ letterSpacing: '2px' }}></input>
                </form>

            </div>
        </div>
    );
};

export default AddProduct;