import React from 'react';
import Slider from 'infinite-react-carousel';
import video from '../assets/intro-video.mp4';

import bannerWelcomeL from '../assets/banner-welcome-l.png'
import bannerWelcomeSm from '../assets/banner-welcome-sm.png'
import bannerEasterL from '../assets/banner-easter-l.png'
import bannerEasterSm from '../assets/banner-easter-sm.png'
import bannerPracticeL from '../assets/banner-practice-l.png'
import bannerPracticeSm from '../assets/banner-practice-sm.png'
import bannerRaboSupportL from '../assets/banner-rabo-support-l.png'
import bannerRaboSupportSm from '../assets/banner-rabo-support-sm.png'

import groupImg from '../assets/group-color.jpg'
import raboSupportImg from '../assets/rabo-support.png'

const LandingPage = () =>{
    const isBigScreen = window.innerWidth > 768
    const today = new Date()
    const lastEasterDay = new Date("2023-04-10")
    const passEasterDay = today > lastEasterDay
    const passSupportDay = today > new Date("2023-09-27")

    const getRaboSupportLink = 'https://www.rabobank.nl/leden/clubsupport'

    const renderEasterL = !passEasterDay && (                        
        <div className='landingPage__banner'>
            <img className ="landingPage__banner--item" src={bannerEasterL} alt="Wij wensen u fijne paasdagen!"/>
        </div>
    )

    const renderEasterSm = !passEasterDay && (                        
        <div className='landingPage__banner'>
            <img className ="landingPage__banner--item" src={bannerEasterSm} alt="Wij wensen u fijne paasdagen!"/>
        </div>
    )

    const renderRaboSupportL = !passSupportDay && (
        <div className='landingPage__banner'>
            <a href={getRaboSupportLink} target="_blank" rel="noreferrer">
                <img className ="landingPage__banner--item" src={bannerRaboSupportL} alt="Rabo Support"/>
            </a>
        </div>
    )

    const renderRaboSupportSm = !passSupportDay && (
        <div className='landingPage__banner'>
            <a href={getRaboSupportLink} target="_blank" rel="noreferrer">
                <img className ="landingPage__banner--item" src ={bannerRaboSupportSm} alt="Rabo Support"/>
            </a>
        </div>
    )

    const renderLandingImgL = passSupportDay ? (
        <div className='landingPage__banner'>
            <img className ="landingPage__banner--item" src ={groupImg} alt="Rabo Support"/>
        </div>
    ) : (
        <div className ="landingPage__container__img">
            <a href={getRaboSupportLink} target="_blank" rel="noreferrer">
                <img className ="landingPage__container__img--item" src={raboSupportImg} alt="Dodewaards Mannenkoor"></img>
            </a>
        </div>
    )

    return(
    <div className ="landingPage">
            <video className = "landingPage__video" autoPlay muted loop playsInline>
                <source src = {video} type="video/mp4" />
            </video>
        <div className ="landingPage__container">
            <div className='landingPage__container--wrapper'>
                {renderLandingImgL}
                {isBigScreen &&
                    <Slider 
                        arrows={false}
                        autoplay
                        autoplayScroll = {1}
                        autoplaySpeed ={5000}
                    >
                        {renderRaboSupportL}
                        <div className='landingPage__banner'>
                            <img className ="landingPage__banner--item" src ={bannerWelcomeL} alt="Welkom  op de website van het Dodewaards Mannenkoor"/>
                        </div>
                        {renderEasterL}
                        <div className='landingPage__banner'>
                            <img className ="landingPage__banner--item" src={bannerPracticeL} alt="Repeteren"/>
                        </div>
                    </Slider>
                }
                {!isBigScreen &&
                    <Slider 
                        arrows={false}
                        autoplay
                        autoplayScroll = {1}
                        autoplaySpeed ={4500}
                    >
                        {renderRaboSupportSm}
                        <div className='landingPage__banner'>
                            <img className ="landingPage__banner--item" src ={bannerWelcomeSm} alt="Welkom  op de website van het Dodewaards Mannenkoor"/>
                        </div>
                        {renderEasterSm}
                        <div className='landingPage__banner'>
                            <img className ="landingPage__banner--item" src={bannerPracticeSm} alt="Repeteren"/>
                        </div>
                    </Slider>
                }
            </div>
        </div>
    </div>
    )
}

export default LandingPage;
