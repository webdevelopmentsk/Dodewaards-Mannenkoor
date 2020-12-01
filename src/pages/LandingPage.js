import React from 'react';
import { content } from '../data/content';
import UpdateCard from '../components/UpdateCard';

const LandingPage = () =>{

    return(
        <div className ="landingPage__container">
            <div className ="landingPage__updateCard">
            <UpdateCard />
            </div>
        </div>
    )
}

export default LandingPage;
/*
            <div className ="landingPage__heading">
                <h1 className ="landingPage__heading--1 heading--l">{content.name.first}</h1>
                <h1 className ="landingPage__heading--2 heading--l">{content.name.second}</h1>
            </div>
*/