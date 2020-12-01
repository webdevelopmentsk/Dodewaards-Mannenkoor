import React from 'react';
import { content } from '../data/content';

const UpdateCard = () => {
    /*
    const getEvents = () =>{

        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); 
        var yyyy = today.getFullYear();
    };
    */
   
    return(
        <div className ="updateCard__container">
            <div className="updateCard__section">
                <div className ="updateCard__heading">
                    {content.sections.news.heading}
                    <div className = "underline underline--grey"></div>
                </div>
                <div className ="updateCard__text">
                    {content.sections.news.list.map((item,id) => 
                    <p className ="paragraph paragraph--dark u-font-p-s" key={id}>{item.text}</p>)}
                </div>
            </div>
            <div className="updateCard__section">
                <div className ="updateCard__heading">
                    {content.sections.agenda.upcommingEvents}
                    <div className = "underline underline--grey"></div>
                </div>
                {
                    content.sections.agenda.list.map((item,id) =>
                    <div className ="updateCard__event" key ={id}>
                    <div className ="updateCard__event__date" ><span className ="updateCard__event__date__content u-font-p-s">{item.dispalyDate}</span></div>
                    <div className ="updateCard__event__text paragraph paragraph--dark u-font-p-s">{item.text}</div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default UpdateCard;