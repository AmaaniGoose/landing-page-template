import React from 'react'
import about from "../images/about.webp";
import Common from './Common'

const About = () => {
    return (
        <>
            <Common 
                name='Welcome to the About Page' 
                //imgsrc={about} 
                visit='/contact' 
                btnname="Contact Now" 
                text="Humanity's true moral test, its fundamental test...consists of its attitude towards those who are at its 
                mercy: animals. We are a group of passionate animal lovers that are working towards improving the condition of the animals 
                in our society. "
            />
        </>
    )
}

export default About
