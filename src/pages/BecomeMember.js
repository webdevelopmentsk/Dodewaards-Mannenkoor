import React from 'react';
import { content } from '../data/content';
import ScrollToTop from "react-scroll-to-top";
import Highlighter from "react-highlight-words";
import privacy from "../assets/Privacy Dodewaards Mannenkoor.pdf"
const BecomeMember = () =>{
    
    return(
        <div className ="page__container">
            <div className ="parallax parallax__becomeMember--1"></div>
            <div className ="page__heading heading--m">{content.sections.becomeMember.heading}</div>
            <div className="page__section">
                <div className="page__section__info ">
                    {content.sections.becomeMember.paragraph.map((text,index) =>
                    <div key ={index}  className ="paragraph paragraph--dark u-m-bottom-paragraph">
                        <Highlighter 
                        highlightClassName="paragraph--highlight"
                        searchWords={["secretarisdmk@outlook.com"]}
                        autoEscape={true}
                        textToHighlight={text}
                        >{text}</Highlighter>
                    </div>)}
                </div>
            </div>
            <div className="page__section">
                <div className="page__section__info">
                {/* <div className ="paragraph paragraph--dark">{content.sections.becomeMember.list.text}</div>
                {content.sections.becomeMember.list.options.map((text,index) =>
                <div key ={index} className ="paragraph paragraph--dark u-m-bottom-paragraph">{text}</div>)} */}
                <a 
                    className ="btn btn__downloadLink" 
                    href={privacy}
                    download="privacy-dodewaards-mannenkoor.pdf"
                >
                        <i className="fa fa-download u-m-right-small"/>
                        {content.sections.becomeMember.download.text}
                </a>
                </div>
            </div>
            <ScrollToTop className = 'btn btn__scrollToTop'smooth color={"white"} />
            <div className ="parallax parallax__becomeMember--2"></div>
        </div>
    )
}

export default BecomeMember;