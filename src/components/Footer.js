import React from 'react';
import { content } from '../data/content';
import { Link } from 'react-router-dom';
import logo from '../assets/logo-1.png';

const Footer = () =>{

    return(
        <div className ="footer__container">
            <div className ="footer__logo">
                <Link className ="footer__link" to={content.routes[0].link}>
                <img className ="footer__logo__content"src ={logo} alt ="Logo"/>
                </Link>
                
            </div>
            <div className ="footer__text">{content.sections.footer.text}</div>
        </div>
    )
}

export default Footer;
