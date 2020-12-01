import React from 'react';
import { content } from '../data/content';

const Contact = () =>{

    return(
        <div className ="page__container">
            <div className ="page__heading heading--m">{content.sections.contact.heading}</div>
            <div className="page__section">
                <div className="page__section__info">
                    <div className ="paragraph paragraph--dark u-m-bottom-paragraph">{content.sections.contact.paragraph[0]}</div>
                    <a href="mailto:secretarisdmk@outlook.com" className ="btn btn__downloadLink">{content.sections.contact.paragraph[1]}</a>
                </div>
            </div>
        </div>
    )
}

export default Contact;