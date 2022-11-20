import React from 'react'
import { Navigate, Outlet } from 'react-router';
import {OAuthStatus} from '../hooks/OAuthStatus';
import Spinner from './Spinner';

export default function PrivateRoute() {
    const { loggedIn, checkingStatus } = OAuthStatus()
    if (checkingStatus) {
        return <h3> <Spinner /> </h3>
    }
    return loggedIn ? <Outlet /> : <Navigate to={"/sign-in"} />
}
