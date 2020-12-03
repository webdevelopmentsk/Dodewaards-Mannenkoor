import React from 'react';
import { content } from '../data/content';

const Agenda = () => {

    return(
        <div className ="page__container">
            <div className ="parallax parallax__agenda"></div>
            <div className ="page__heading heading--m">{content.sections.agenda.heading}</div>

            <div className="page__section">
                <div className="page__section__info">
                {
                    content.sections.agenda.list.map((item,id) =>
                    <div className ="updateCard__event" key ={id}>
                    <div className ="updateCard__event__date"><span className ="updateCard__event__date__content u-font-p">{item.dispalyDate}</span></div>
                    <div className ="updateCard__event__text paragraph paragraph--dark u-font-p">{item.text}</div>
                    </div>)
                }
                </div>

            </div>
        </div>
    );
}

export default Agenda;