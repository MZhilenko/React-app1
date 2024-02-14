import React, { Component } from 'react';
import './ProfileCard.css';

const ProfileCard = () => {
    return (
        <div className='profileCard'>
            <img src='https://preview.redd.it/eric-cartman-from-south-park-v0-k3zxtwfpy4la1.png?width=640&crop=smart&auto=webp&s=25e933970099cceea6e7a1842c5bdc75703d5d0a' alt='user' className='profileCard__img'/>
            <div className='profileCard__info'>
                <div className='profileCard__name'>Eric Cartman</div>
                <div className='profileCard__item'><strong>Date of Barth:</strong> 18 March</div>
                <div className='profileCard__item'><strong>City:</strong> Moscow</div>
                <div className='profileCard__item'><strong>Education:</strong> RosNOU</div>
            </div>
        </div>
    );
}

export default ProfileCard;