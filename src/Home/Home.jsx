import React from 'react';
import TopSwipBanner from './TopSwipBanner';
import OrderOnline from './OrderOnline/OrderOnline';
import HomeSecondBanner from './HomeSecondBanner/HomeSecondBanner';
import FromMenu from './FromMenu/FromMenu';
import CallUs from './CallUs';
import ChefRecommend from './ChefRecommend/ChefRecommend';

const Home = () => {
    return (
        <>
        <TopSwipBanner />
        <OrderOnline />
        <HomeSecondBanner />
        <FromMenu />
        <CallUs />
        <ChefRecommend />
        </>
    );
};

export default Home;