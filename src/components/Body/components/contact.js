import React from "react";
import Social from "../../Shared/social";
import '../style/contact.css'

const Contact = () => {
    return (
        <div className='contact'>
            <label className='sectionHeader'>Contact</label>
            <div className='contactContainer'>
                <div className='contactLeft'>Let's get in touch and maybe I could be a part of your exciting project!
                    <Social className='bottomSocial'/>
                </div>
                <div className='download'>
                    <a download href={require('../assets/Resume.pdf').default}>
                        <img src={require('../assets/download-file.png').default} className='downloadImage' />
                        Resume
                    </a>
                </div>
            </div>     
        </div>
    )
}

export default Contact;