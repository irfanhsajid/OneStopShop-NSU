import React from 'react';
import { Link } from 'react-router-dom';
import errorImg from './error404.jpg';
const NotFound = () => {
    return (
        <div className="d-flex justify-content-center" >
            <div>
                <img width="600px" className="img-fluid" src={errorImg} alt="" /> <br />
                <Link style={{ textDecoration: 'none' }} to="/"> <button className=" d-flex mx-auto btn-outline-primary px-3 py-1 rounded-2 mb-5"> Go Back Home</button></Link>
            </div>
        </div>
    );
};

export default NotFound;