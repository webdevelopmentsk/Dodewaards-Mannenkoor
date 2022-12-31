import React from 'react';
import { content } from '../data/content';
import fotoVanBeek from '../assets/FotovanBeek_logo_350.jpg'
const Sponser = () =>{

    return(
        <div className ="page__container">
            <div className ="parallax parallax__sponser"></div>
            <div className ="page__heading heading--m">{content.sections.sponser.heading}</div>
            <div className="page__section">
                <div className="page__section__info">
                <div className ="page__sponser__sub-heading">Onze huidige sponsoren:</div>
                    <div className="page__sponser__img">
                        <a href="https://fotovanbeek.nl/" target="_blank" rel="noreferrer">
                            <img className="page__sponser__img--item" src={fotoVanBeek} alt="FotovanBeek"></img>
                        </a>
                    </div>
                    {content.sections.sponser.paragraph.map((text,index) =>
                    <div key ={index} className ="paragraph paragraph--dark u-m-bottom-paragraph">{text}</div>)}
                </div>
            </div>

        </div>
    )
}

export default Sponser;