import React, { useState } from 'react';
import { Alert, Spinner } from 'react-bootstrap';
import { Link, useHistory, useLocation } from 'react-router-dom';
import swal from 'sweetalert';
import Footer from '../../Shared/Footer/Footer';
import NavBar from '../../Shared/NavBar/NavBar';
import useAuth from '../Hooks/useAuth';
import './login.css';
import loginImg from './login_yellow.png';
const Login = () => {
    const [loginData, setLoginData] = useState({});
    const { user, setUser, loginUser, isLoading, setIsLoading, authError, setAuthError, signInWithGoogle } = useAuth();
    const location = useLocation();
    const history = useHistory();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        console.log(newLoginData);
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e => {
        e.preventDefault();
        loginUser(loginData.email, loginData.password)
            .then((result) => {
                setIsLoading(true);
               // console.log(result.user);
                setUser(result.user);
                const destination = location.state?.from || "/";
                history.replace(destination);
                setAuthError('');
                swal("Welcome!", "Successfully Logged in!", "success")
            })
            .catch((error) => {
                setAuthError(error.message);
            })
            .finally(() => setIsLoading(false));

    }
    const handleGoogleLogin = () => {
        signInWithGoogle(location, history);
    }
    return (
        <>
            <NavBar></NavBar>
            <div className="container login-container">
                <div className="row justify-content-center align-items-center login-form">
                    <div className="form-left col-md-5 col-12" data-aos="fade-up-right" data-aos-duration="800">
                        <h5 className="text-center fw-bold mb-4">Login first to buy any product</h5>

                        {
                            !isLoading && <form onSubmit={handleLoginSubmit} className="my-2 form-inputField">

                                <input className="border-0" onBlur={handleOnBlur} type="email"
                                    name="email" placeholder="Your email" /> <br />

                                <input className="border-0" onBlur={handleOnBlur}
                                    name="password"
                                    type="password" placeholder="Your Password" />
                                <br />

                                <input className="login d-flex m-auto btn rounded-2 w-auto text-center px-4 py-1" type="submit" value="Login" />


                            </form>
                        }
                        {
                            isLoading && <Spinner animation="border" />
                        }

                        {
                            user?.email && <Alert variant='success'> Logged In Successfully</Alert>
                        }

                        {
                            authError && <Alert variant='danger'>{authError}</Alert>
                        }
                        <p>New to <b>Qutir-Mahal</b> Website? <Link to="/register">Create Account</Link></p>
                        <p className="text-center">----------or---------</p>
                        <button onClick={handleGoogleLogin} className="btn-dark text-warning px-3 py-1 border-0 rounded-2 d-flex mx-auto">Google Sign In</button>

                    </div>
                    <div className="form-right col-md-7 col-12" data-aos="fade-up-left" data-aos-easing="linear"
                        data-aos-duration="700">
                        <img className="img-fluid login-img" src={loginImg} alt="" />
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </>
    );
};


export default Login;