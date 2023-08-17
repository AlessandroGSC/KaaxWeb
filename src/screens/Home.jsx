import React, { useEffect } from 'react';
import { StylesHome } from '../styles/HomeStyles';
import { Header } from '../components/NavBar';
import DashboardBase from '../components/DashboardBase';


export const Home = () => {
    return (
        <div style={StylesHome.container}>
            <DashboardBase />
        </div>
    )
}