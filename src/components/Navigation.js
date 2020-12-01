import React , { useState, useEffect } from 'react';
import { content } from '../data/content';
import { Link } from 'react-router-dom'
import logo from '../assets/logo-1.png'
const Navigation = () =>{

    const [routeIndex, setRouteIndex] = useState(0);

    useEffect(()=>{
        content.routes.forEach(()=> (route,index) =>{
            switch (window.location.pathname) {
                case route.link:setRouteIndex(index); break;
                default:break;
              }
        })
    },[routeIndex])
    return(
        <div className ="navigation__container">
            <div className ="navigation__heading">
                <div className ="navigation__heading__group">
                    <div className ="navigation__heading__group--1 u-m-right-small">{content.name.first}</div>
                    <div className ="navigation__heading__group--2">{content.name.second}</div>
                </div>
                <div className ="navigation__heading__logo">
                    <Link 
                    className ="navigation__heading__logo__link" 
                    to={content.routes[0].link}
                    onClick ={()=>setRouteIndex(0)}
                    >
                        <img className ="navigation__heading__logo__content"src ={logo} alt ="Logo"/>
                        <div className ="navigation__heading__logo--line"></div>
                    </Link>
                </div>
            </div>

            <div className ="navigation__bar">
                {content.routes.map((route,index)=>
                <div key ={index} className ="navigation__link__container">
                <Link className ={routeIndex === index ?"navigation__link navigation__link__active":"navigation__link"} 
                to={route.link}
                onClick ={()=>setRouteIndex(index)}
                >
                {route.name}
                </Link></div>)}
            </div>
            <div  className ="navigation__burger">
                <div className ="navigation__burger__line navigation__burger__line--1"></div>
                <div className ="navigation__burger__line navigation__burger__line--2"></div>
                <div className ="navigation__burger__line navigation__burger__line--3"></div>
            </div>
            

        </div>
    )
}

export default Navigation;
