import React from 'react';
import TopSwipBanner from './TopSwipBanner';
import OrderOnline from './OrderOnline/OrderOnline';
import HomeSecondBanner from './HomeSecondBanner/HomeSecondBanner';
import FromMenu from './FromMenu/FromMenu';

const Home = () => {
    return (
        <>
        <TopSwipBanner />
        <OrderOnline />
        <HomeSecondBanner />
        <FromMenu />
        </>
    );
};

export default Home;