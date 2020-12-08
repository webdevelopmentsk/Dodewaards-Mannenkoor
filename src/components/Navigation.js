import React from 'react';
import { content } from '../data/content';
import { Link } from 'react-router-dom'
import logo from '../assets/logo-1.png'
import NavigationLinkList from './NavigationLinkList';
import Footer from '../components/Footer';

const Navigation = ({onBurgerClick,onLinkClick,routeIndex,displayBurgerBar}) =>{



    return(
        <>
        <div className ="navigation__container">
            <div className ="navigation__heading">
                <div className ="navigation__heading__group">
                    <div className ="navigation__heading__group--1">{content.name.first}</div>
                    <div className ="navigation__heading__group--line"></div>
                    <div className ="navigation__heading__group--2">{content.name.second}</div>
                </div>
                <div className ="navigation__heading__logo">
                    <Link 
                    className ="navigation__heading__logo__link" 
                    to={content.routes[0].link}
                    onClick ={()=> onLinkClick(0)}
                    >
                        <img className ="navigation__heading__logo__content"src ={logo} alt ="Logo"/>
                       
                    </Link>
                </div>
                
            </div>
            
            <div className ="navigation__bar" >
                <NavigationLinkList onLinkClick = {onLinkClick} routeIndex ={routeIndex} name = 'navigation__bar'/>
                <Footer />
            </div>
            
            <div  className ="navigation__burger">
                <input type="checkbox" className="navigation__burger__checkbox" id="navigation-toggle"/>
                <label htmlFor="navigation-toggle" className="navigation__burger__button">
                    <span className={displayBurgerBar? "navigation__burger__icon navigation__burger__icon__cross":"navigation__burger__icon"} onClick ={onBurgerClick} >&nbsp;</span>
                </label> 
            </div>  
            
        </div>
        {displayBurgerBar && 
                    <div className ="navigation__burger__bar" >
                    <NavigationLinkList 
                    onLinkClick = {onLinkClick} 
                    routeIndex ={routeIndex} 
                    name = 'navigation__burger__bar'
                    />
                    <Footer />
                    </div>
                } 
        </>
    )
}

export default Navigation;

