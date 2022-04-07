import React from "react";
import Social from "../../Shared/social";
import '../style/about.css'

const About = () => {
    return (
        <div className='about'>
            <div className='landing'>
                <div className='intro'>
                    <div className='animate-name'>
                        Hey, I'm Jerry.
                    </div>
                    <div className='info'>
                    I am a student at the University of Waterloo with experience in 
                    fullstack and infrastructure/system development. 
                    </div>
                </div>
                <div className='graphic'>
                    <img 
                    src={require('../assets/graphics.svg').default}
                    className='spinner' />
                </div>
            </div>
            <Social/>
        </div>
    )
}

export default About;