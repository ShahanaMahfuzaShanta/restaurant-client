import React from 'react';
import TopSwipBanner from './TopSwipBanner';
import OrderOnline from './OrderOnline/OrderOnline';
import HomeSecondBanner from './HomeSecondBanner/HomeSecondBanner';
import FromMenu from './FromMenu/FromMenu';
import CallUs from './CallUs';
import ChefRecommend from './ChefRecommend/ChefRecommend';
import FeaturedItem from './FeaturedItem/FeaturedItem';
import Reviews from './Reviews/Reviews';

const Home = () => {
    return (
        <>
        <TopSwipBanner />
        <OrderOnline />
        <HomeSecondBanner />
        <FromMenu />
        <CallUs />
        <ChefRecommend />
        <FeaturedItem />
        <Reviews />
        </>
    );
};

export default Home;