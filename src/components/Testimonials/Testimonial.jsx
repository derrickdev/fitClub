import React, { useState } from 'react'
import './testimonial.css'
import {testimonialsData} from '../../data/testimonialsData'
import leftArrow from '../../assets/leftArrow.png'
import rightArrow from '../../assets/rightArrow.png'
import {motion} from 'framer-motion'





const Testimonial = () => {
    const [selected,setSelected] = useState(0);
    let tlenght = testimonialsData.length;
    const transition = {type:'spring',duration : 3}
  return (
    <div className="testimonial">
        <div className="left-t">
        <span>Testimonial </span>
        <span className='stroke-text'>WHAT THEY</span>
        <span>SAY ABOUT US</span>

        <motion.span 
            key={selected}
            initial ={{opacity : 0 }}
            animate ={{opacity : 1 , X :0}}
            exit ={{opacity : 0 , x:100}}
            transition={transition}
        >
            {testimonialsData[selected].review}
        </motion.span>
        <span>
            <span style={{color : 'var(--orange)'}}>{testimonialsData[selected].name }</span> {" "}
            - {testimonialsData[selected].status}
        </span>
        </div>
        <div className="right-t">
            <motion.div
                initial = {{opacity : 0,x : -100}}
                whileInView={{opacity :1,x : 0}}
                transition={{...transition,duration : 2}}
            ></motion.div>
            <motion.div
                initial = {{opacity : 0,x : 100}}
                whileInView={{opacity : 1,x : 0}}
                transition={{...transition,duration : 2}}
            ></motion.div>
            <motion.img
            key={selected}
                // initial = {{opacity : 0 , x : 100}}
                animate = {{opacity : 1 , X :0}}
                exit = {{opacity : 0 , x:-100}}
                transition={transition}
            src={testimonialsData[selected].image} alt="" />

            <div className="arrows">
                <img
                onClick={() => (
                    selected===0 ?setSelected(tlenght -1) :
                    setSelected((prev) => prev -1 )
                )}
                 src={leftArrow} alt="" />
                <img 
                onClick={() => (
                    selected===tlenght -1 
                    ? setSelected(0) :
                    setSelected((prev) => prev + 1)
                )}
                src={rightArrow} alt="" />
                
            </div>

        </div>
        
    </div>
  )
}

export default Testimonial