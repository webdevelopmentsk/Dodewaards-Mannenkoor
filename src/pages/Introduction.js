import React from 'react';
import { content } from '../data/content';
import history from '../assets/history.jpg';
import member0 from '../assets/boadMembers/KeesVanDijk.jpg';
import member1 from '../assets/boadMembers/WimBloemendal.jpg';
import member2 from '../assets/boadMembers/JanHeikamp.jpg';
import member3 from '../assets/boadMembers/KeesHoogakker.jpg';
import member4 from '../assets/boadMembers/CasperVanDoorn.jpg';

import video from '../assets/intro-video.mp4';


const Introduction = () =>{

    return(
    <>
        <div className ="page__container">
            <div className ="parallax parallax__introduction"></div>
            <div className ="page__heading heading--m ">{content.sections.introduction.heading}</div>
            <div className ="page__section">
                <div className ="page__section__info">
                    {content.sections.introduction.paragraph.map((text,index) =>
                    <div key ={index} className ="paragraph paragraph--dark u-m-bottom-paragraph">{text}</div>)}
                </div>
            </div>
 
        </div>
        <div className ="page__container">
            <div className ="parallax parallax__history">
            </div>
            <div className ="page__heading heading--m ">{content.sections.history.heading}</div>
            <div className ="page__section">
            <div className ="page__section__info">
                {content.sections.history.paragraph.map((text,index) =>
                <div key ={index} className ="paragraph paragraph--dark u-m-bottom-paragraph">{text}</div>)}
                </div>
            </div>

        </div>
        <div className ="page__container">
        <video className = "page__section__video" autoPlay muted loop>
        <source src = {video} type="video/mp4" />
        </video>
            <div className ="page__heading heading--m  ">{content.sections.board.heading}</div>
            <div className ="page__members">
                {content.sections.board.paragraph.map((text,index) =>
                <div key ={index} className ="paragraph paragraph--dark u-m-bottom-paragraph">{text}</div>)}
                    <div className ="page__members__photo__container">
                    <div className ="page__members__photo__card">
                        <img className ="page__members__photo__content" src ={member0} alt= {content.sections.board.members[0].position}/>
                        <div className ="paragraph paragraph--dark u-center-text">{content.sections.board.members[0].name}</div>
                        <div className ="paragraph paragraph--gold u-center-text">{content.sections.board.members[0].position}</div>
                    </div>
                    <div className ="page__members__photo__card">
                        <img className ="page__members__photo__content" src ={member1} alt= {content.sections.board.members[1].position}/>
                        <div className ="paragraph paragraph--dark u-center-text ">{content.sections.board.members[1].name}</div>
                        <div className ="paragraph paragraph--gold u-center-text">{content.sections.board.members[1].position}</div>
                    </div>
                    <div className ="page__members__photo__card">
                        <img className ="page__members__photo__content" src ={member2} alt= {content.sections.board.members[2].position}/>
                        <div className ="paragraph paragraph--dark u-center-text">{content.sections.board.members[2].name}</div>
                        <div className ="paragraph paragraph--gold u-center-text">{content.sections.board.members[2].position}</div>
                    </div>
                    <div className ="page__members__photo__card">
                        <img className ="page__members__photo__content" src ={member3} alt= {content.sections.board.members[3].position}/>
                        <div className ="paragraph paragraph--dark u-center-text">{content.sections.board.members[3].name}</div>
                        <div className ="paragraph paragraph--gold u-center-text">{content.sections.board.members[3].position}</div>
                    </div>
                    <div className ="page__members__photo__card">
                        <img className ="page__members__photo__content" src ={member4} alt= {content.sections.board.members[4].position}/>
                        <div className ="paragraph paragraph--dark u-center-text">{content.sections.board.members[4].name}</div>
                        <div className ="paragraph paragraph--gold u-center-text">{content.sections.board.members[4].position}</div>
                    </div>
                </div>
            </div>

        </div>
    </>
    )
}

export default Introduction;

/*<img className ="page__photo" src ={intro1} alt= "Group Members"/>
<video className = "page__section__video" autoPlay muted loop>
<source src = {video} type="video/mp4" />
</video>
*/