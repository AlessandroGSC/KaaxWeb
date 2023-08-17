import React, { useEffect } from 'react';
import { StylesHome } from '../styles/HomeStyles';
import { Header } from '../components/NavBar';
import DashboardBase from '../components/DashboardBase';
import Cookies from 'js-cookie';


export const Home = () => {
    const cookie = Cookies.get('userCookie');
    const token = cookie ? JSON.parse(cookie).token : null;
    return (
        <div style={StylesHome.container}>
        <Header />
        <div >
            <DashboardBase token={token}/>
        </div>
        </div>

    )
}