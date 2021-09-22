import React from "react";
import Divider from "../Shared/divider";
import './body.css'
import About from "./components/about";
import Contact from "./components/contact";
import Project from "./components/project";
import Skill from "./components/skill";
import Work from "./components/work";

const Body = () => {
    return (
        <div className='body'>
            <section id='about'>
                <About />
            </section>
            <section id='work'>
                <Divider />
                <Work />
            </section>
            <section id='project'>
                <Divider />
                <Project />
            </section>
            <section id='contact'>
                <Divider />
                <Contact />
            </section>

        </div>
    )
}

export default Body;