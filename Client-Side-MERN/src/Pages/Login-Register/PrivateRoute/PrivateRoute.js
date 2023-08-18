import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Redirect, Route } from 'react-router';
import useAuth from '../Hooks/useAuth';


const Privateroute = ({ children, ...rest }) => {
    const { user, isLoading } = useAuth();
    if (isLoading) {
        return <Spinner animation="border"></Spinner>
    }
    return (
        <Route
            {...rest}
            render={({ location }) => user.email ? children :
                <Redirect to={
                    {
                        pathname: "/login",
                        state: { from: location }
                    }
                }>

                </Redirect>

            }
        >

        </Route>
    );
};

export default Privateroute;