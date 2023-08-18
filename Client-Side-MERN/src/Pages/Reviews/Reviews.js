import React, { useEffect, useState } from 'react';
import { RatingView } from 'react-simple-star-rating';
import './Reviews.css';
const Reviews = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/reviews",{
          
        })
            .then(res => res.json())
            .then(data => setReviews(data))
    }, []);
    return (
        <div className=" p-3 m-2 ">
            <h1 data-aos="fade-up" data-aos-duration="1500" className="text-center fw-bold">Testimonials</h1>
            <p className="border-bottom mt-3 border-2 d-flex mx-auto w-50"></p>
            <div className="review-container">
                <div className="row justify-content-center my-4 g-5">
                    {
                        reviews.map(review =>

                            <div key={review._id} className="col-12 mx-3 col-md-5 review-card rounded-3 text-center  p-3 ">
                                <h4 className="fw-bold nav-color">{review.userName}</h4>
                                <p data-aos="zoom-in" data-aos-duration="1000" className="review-text">{review.review}</p>
                                <p><b><small className="text-danger">{review.productName}</small></b></p>
                                <RatingView ratingValue={review.rate} /* RatingView Props */ />
                            </div>

                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default Reviews;