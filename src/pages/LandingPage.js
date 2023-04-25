import React from 'react';
import Slider from 'infinite-react-carousel';
import video from '../assets/intro-video.mp4';

import bannerWelcomeL from '../assets/banner-welcome-l.png'
import bannerWelcomeSm from '../assets/banner-welcome-sm.png'
import bannerEasterL from '../assets/banner-easter-l.png'
import bannerEasterSm from '../assets/banner-easter-sm.png'
import bannerPracticeL from '../assets/banner-practice-l.png'
import bannerPracticeSm from '../assets/banner-practice-sm.png'

import groupImg from '../assets/group-color.jpg'

const LandingPage = () =>{
    const isBigScreen = window.innerWidth > 768
    const today = new Date()
    const lastEasterDay = new Date("2023-04-10")
    const passEasterDay = today > lastEasterDay

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
    return(
    <div className ="landingPage">
            <video className = "landingPage__video" autoPlay muted loop playsInline>
                <source src = {video} type="video/mp4" />
            </video>
        <div className ="landingPage__container">
            <div className='landingPage__container--wrapper'>
                <div className ="landingPage__container__img">
                    <img className ="landingPage__container__img--item" src={groupImg} alt="Dodewaards Mannenkoor"></img>
                </div>
                {isBigScreen &&
                    <Slider 
                        arrows={false}
                        autoplay
                        autoplayScroll = {1}
                        autoplaySpeed ={4500}
                    >
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
