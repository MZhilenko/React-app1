import React, { Component } from 'react';
import './Post.css';

const Post = () => {
    return (
        <div className='post'>
            <div className='post__profile'>
                <img src='https://cdn-icons-png.flaticon.com/512/9131/9131529.png' className='post__icon' alt='author'/>
                <div className='post__info'>
                    <div className='post__author'>Ivan Ivanov</div>
                    <div className='post__time'>11.01.2024</div>
                </div>
            </div>
            <div className='post__text'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut alias eum facilis illo debitis similique libero odio quas blanditiis? Repellendus qui distinctio quam praesentium eum at magnam, aspernatur autem ipsum?</div>
            <img src='https://t4.ftcdn.net/jpg/03/86/82/73/360_F_386827376_uWOOhKGk6A4UVL5imUBt20Bh8cmODqzx.jpg' className='post__img' alt='space'/>
        </div>
    );
}

export default Post;