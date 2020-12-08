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
                    <div className ="page__agenda__event" key ={id}>
                    <div className ="page__agenda__event__date"><span className ="updateCard__event__date__content u-font-p">{item.dispalyDate}</span></div>
                    <div className ="page__agenda__event__text paragraph paragraph--dark u-font-p">{item.text}</div>
                    </div>)
                }
                </div>

            </div>
            <div className ="page__heading heading--m">{content.sections.news.heading}</div>
            <div className="page__section">
                <div className="page__section__info">
                    {content.sections.news.list.map((item,id) => 
                    <p className ="paragraph paragraph--dark u-font-p" key={id}>{item.text}</p>)}
                </div>
            </div>

        </div>
    );
}

export default Agenda;