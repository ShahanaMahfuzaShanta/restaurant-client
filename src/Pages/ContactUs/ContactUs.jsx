import React from 'react';
import CommonBanner from '../../Components/CommonBanner';
import '../../Components/commonBanner.css'
import UserTitle from '../../Components/UserTitle';
import telephone from '../../assets/contact/telephone.svg';
import address from '../../assets/contact/address.svg';
import clock from '../../assets/contact/clock.svg';

const ContactUs = () => {
    const contactData = [
        {
            "id": 1,
            "icon": "",
            "title": "phone",
            "info1": "+38 (012) 34 56 789"
        },
        {
            "id": 2,
            "title": "address",
            "info1": "Dhaka, Bangladesh"
        },
        {
            "id": 3,
            "title": "working ours",
            "info1": "Mon - Fri: 08:00 - 22:00",
            "info2": "Sat - Sun: 10:00 - 23:00"
        }
    ]
    return (
        <>
        <div className='contact-banner py-60'>
        <CommonBanner heading="contact us" subHeading="would you like to try a dish?" />
        </div>
        <UserTitle title="visit us" heading="our location" />
        </>
    );
};

export default ContactUs;