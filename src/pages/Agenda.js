import React from 'react';
import { content } from '../data/content';

const Agenda = () => {

    return(
        <div className ="page__container">
            <div className ="parallax parallax__agenda"></div>
            <div className ="page__heading heading--m">{content.sections.agenda.heading}</div>

            <div className="page__section">
  
            <p className="paragraph paragraph--dark u-font-p" > </p>
            <div className="page__section__info">
    {
        content.sections.agenda.list.length ? 
        content.sections.agenda.list.map((item,id) =>
        <div className ="page__agenda__event" key ={id}>
        <div className ="page__agenda__event__date"><span className ="updateCard__event__date__content u-font-p">{item.displayDate}</span></div>
        <div className ="page__agenda__event__text paragraph paragraph--dark u-font-p">{item.text}</div>
        </div>)
        :
        <div className = "paragraph paragraph--dark u-font-p u-center-text">Er zijn verder nog geen activiteiten gepland. Zodra dat wel zo is plaatsen we hier een update!</div>
    }
    </div>

            </div>
        </div>
    );
}

export default Agenda;

/* Agenda List

    <div className="page__section__info">
    {
        content.sections.agenda.list.map((item,id) =>
        <div className ="page__agenda__event" key ={id}>
        <div className ="page__agenda__event__date"><span className ="updateCard__event__date__content u-font-p">{item.displayDate}</span></div>
        <div className ="page__agenda__event__text paragraph paragraph--dark u-font-p">{item.text}</div>
        </div>)
    }
    </div>

*/