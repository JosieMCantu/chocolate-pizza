import React from 'react';

export default class Footer extends React.Component {
    render() {
        return (
            <footer>
                <div className='divider'></div>
                <div className='footer-container'>
                    <img alt='author pic' src='van-pic.png' />
                    <div className='name-div'>
                        <h3>Vanessa Stevenson
                        </h3>
                        <p>Food Enthusiast, Photography Fan. Add a pinch of raw foodism and that's pretty much who I am!</p>
                        </div>
                    <button>Share Recipe</button>
                </div>
                <div className='very-bottom'>
                    <img alt='tiny logo' src='logo.png'></img>
                    <p>Delicious Copyright 2013 All Rights Reserved Proudly Published With Ghost</p>
                </div>
            </footer>
        )
    }

}