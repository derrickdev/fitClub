import React from 'react'
import './Hero.css'
import Header from '../Header/Header.jsx'
import hero_image from '../../assets/hero_image.png'
import hero_image_back from '../../assets/hero_image_back.png'
import Heart from '../../assets/heart.png';
import Calories from '../../assets/calories.png'

const Hero = () => {
    return (
        <div className="hero">
            <div className="left-h">
                <Header />
                {/*The best ad*/}
                <div className="the-best-ad">
                    <div></div>
                    <span>the best fitness club in the town</span>
                </div>
                {/*Header heading*/}
                <div className="hero-text">
                    <div>
                        <span className='stroke-text' >shape </span>
                        <span>your</span>
                    </div>
                    <div>
                        <span>ideal body</span>
                    </div>
                    <div>
                        <span>here we help you to shape and
                            build your ideal body and live up your life to fullest
                        </span>
                    </div>
                </div>
                {/*Figures */}
                <div className="figures">
                    <div>
                        <span>+ 140</span>
                        <span>expert coaches</span>
                    </div>
                    <div>
                        <span>+ 978</span>
                        <span>members joined</span>
                    </div>
                    <div>
                        <span>+ 50</span>
                        <span>fitness programs</span>
                    </div>

                </div>

                {/*Hero buttons */}
                <div className="hero-buttons">
                    <button className='btn' >Get started</button>
                    <button className='btn'>Learn More</button>
                </div>

            </div>

            <div className="right-h">
                <button className="btn">Join now</button>
                <div className="heart-rate">
                    <img src={Heart} alt="" />
                    <span>Heart rate </span><span> 116 bpm</span>
                </div>
                {/*hero images */}
                <img src={hero_image} alt="" className='hero_image' />
                <img src={hero_image_back} alt="" className='hero_image_back' />
                <div className="calories">
                    <img src={Calories} alt="" />
                    <div>
                        <span>Calories burned</span>
                        <span>220 Kcal</span>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Hero