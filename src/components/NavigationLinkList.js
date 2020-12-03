import React from 'react';
import { content } from '../data/content';
import { Link } from 'react-router-dom'

const NavigationLinkList = props =>{

    return(
    <>
        {content.routes.map((route,index)=>
            <div key ={index} className = {`${props.name}__link__container`}>
            <Link className ={props.routeIndex === index ?`${props.name}__link__active`:`${props.name}__link`} 
            to={route.link}
            onClick ={()=> props.onLinkClick(index,props.name)}
            >
            {route.name}
            </Link></div>)}
    </>
    )
}

export default NavigationLinkList;