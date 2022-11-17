import React from 'react'
import { Navigate, Outlet } from 'react-router';
import {OAuthStatus} from '../hooks/OAuthStatus';

export default function PrivateRoute() {
    const { loggedIn, checkingStatus } = OAuthStatus()
    if (checkingStatus) {
        return <h3>Loading...</h3>
    }
    return loggedIn ? <Outlet /> : <Navigate to={"/sign-in"} />
}
