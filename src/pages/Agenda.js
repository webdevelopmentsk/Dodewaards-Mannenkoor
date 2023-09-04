import React from 'react';
import { content } from '../data/content';

const Agenda = () => {
    const today = new Date()
    const hasNotPassed = (date) => {
        console.log(new Date(date))
        return new Date(date) > today
    }

    return(
        <div className ="page__container">
            <div className ="page__heading heading--m page__heading__agenda">{content.sections.agenda.heading}</div>

            <div className="page__section">
  
            <p className="paragraph paragraph--dark u-font-p" > </p>
            <div className="page__section__info">
                <div className="paragraph paragraph--dark u-font-p">
                    Elke donderdagavond om 19.30 uur repeteren wij. Dit vind plaats in de basisschool de Bellefleur, Marijkelaan 1 te Dodewaard.
                </div>
                <div className="paragraph paragraph--dark u-font-p u-mtb-medium u-center-text heading--m">2023</div>
                {
                    content.sections.agenda.y2023.filter(item => hasNotPassed(item.date)).map((item,id) =>
                    <div className ="page__agenda__event" key ={id}> 
                    <div className ="page__agenda__event__date"><span className ="updateCard__event__date__content u-font-p">{item.displayDate} </span></div>
                    <div className ="page__agenda__event__text paragraph paragraph--dark u-font-p">{item.text}</div>
                    </div>)
                }
                <div className="paragraph paragraph--dark u-font-p u-mtb-medium u-center-text heading--m">2024</div>
                {
                    content.sections.agenda.y2024.filter(item => hasNotPassed(item.date)).map((item,id) =>
                    <div className ="page__agenda__event" key ={id}> 
                    <div className ="page__agenda__event__date"><span className ="updateCard__event__date__content u-font-p">{item.displayDate} </span></div>
                    <div className ="page__agenda__event__text paragraph paragraph--dark u-font-p">{item.text}</div>
                    </div>)
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