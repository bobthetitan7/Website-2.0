import React from "react";
import { SocialNetwork } from "../../data/social";
import './social.css'

const Social = () => {
    const data = SocialNetwork
    return (
        <div className='socialContact'>
            {data.map((item) => {
                return (
                    <a href={item.link}>
                        <div className='social'>
                            <img src={item.icon} className='socialIcon' />
                        </div>
                    </a>
                )
            })}
        </div>
    )
}

export default Social;