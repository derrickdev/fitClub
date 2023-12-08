import React from 'react'
import './Hero.css'
import Header from '../Header/Header.jsx'
import hero_image from '../../assets/hero_image.png'
import hero_image_back from '../../assets/hero_image_back.png'
import Heart from '../../assets/heart.png';
import Calories from '../../assets/calories.png'
import {motion} from 'framer-motion'
import NumberCounter from 'number-counter'

const Hero = () => {
    const transition = {type:'spring',duration : 3}
    const mobile = window.innerWidth <= 768? true : false
    return (
        <div className="hero" id='home'>
            <div className="blur hero-blur"></div>
            <div className="left-h">
                <Header />
                {/*The best ad*/}
                <div className="the-best-ad">
                    <motion.div
                    initial = {{left : mobile ?'165px' : '238'}}
                    whileInView={{left : '8px'}}
                    transition = {{...transition,type :'tween'}}

                    ></motion.div>
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
                        <span><NumberCounter end={140} start={100} delay ='4' preFix ='+ '  /></span>
                        <span>expert coaches</span>
                    </div>
                    <div>
                        <span> <NumberCounter end={978} start={800} delay ='4' preFix ='+ '  /></span>
                        <span>members joined</span>
                    </div>
                    <div>
                        <span><NumberCounter end={50} start={0} delay ='4' preFix ='+ '  /></span>
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
                <motion.div className="heart-rate"
                initial = {{right : '-1rem'}}
                whileInView={{right : '4rem'}}
                transition={transition}>
                    <img src={Heart} alt="" />
                    <span>Heart rate </span><span> 116 bpm</span>
                </motion.div >
                {/*hero images */}
                <img src={hero_image} alt="" className='hero_image' />
                <motion.img
                    initial = {{right : '11rem'}}
                    whileInView={{right : '20rem'}}
                    transition={transition}
                src={hero_image_back} alt="" className='hero_image_back' />
                <motion.div className="calories"
                initial = {{right : '37rem'}}
                whileInView={{right : '28rem'}}
                transition={transition}>
                    <img src={Calories} alt="" />
                    <div>
                        <span>Calories burned</span>
                        <span>220 Kcal</span>
                    </div>
                </motion.div>

            </div>
        </div>
    )
}

export default Hero