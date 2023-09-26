import React from 'react';
import { Navigate, Route } from 'react-router-dom'

const Protected = ({ component: Cmp, ...rest }) => (
    <Route
        {...rest}
        render={(props) =>
            localStorage.getItem('login') ? (
                <Cmp {...props} />
            ) :
                <Navigate
                    to={{ pathname: "/login", state: { from: props.location } }}

                />
        }
    />


)

export default Protected;