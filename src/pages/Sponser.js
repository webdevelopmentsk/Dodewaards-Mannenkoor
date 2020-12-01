import React from 'react';
import { content } from '../data/content';

const Sponser = () =>{

    return(
        <div className ="page__container">
            <div className ="parallax parallax__sponser"></div>
            <div className ="page__heading heading--m">{content.sections.sponser.heading}</div>
            <div className="page__section">
                <div className="page__section__info">
                    {content.sections.sponser.paragraph.map((text,index) =>
                    <div key ={index} className ="paragraph paragraph--dark u-m-bottom-paragraph">{text}</div>)}
                </div>
            </div>

        </div>
    )
}

export default Sponser;