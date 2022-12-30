import React from 'react';
import Slider from 'infinite-react-carousel';
import video from '../assets/intro-video.mp4';

import bannerWelcomeL from '../assets/banner-welcome-l.png'
import bannerWelcomeSm from '../assets/banner-welcome-sm.png'
import bannerNewYearL from '../assets/banner-happy-new-year-l.png'
import bannerNewYearSm from '../assets/banner-happy-new-year-sm.png'
import bannerPracticeL from '../assets/banner-practice-l.png'
import bannerPracticeSm from '../assets/banner-practice-sm.png'

const LandingPage = () =>{
    const isBigScreen = window.innerWidth > 768
    const bannerWelcome = isBigScreen ? bannerWelcomeL : bannerWelcomeSm
    const bannerNewYear = isBigScreen ? bannerNewYearL : bannerNewYearSm
    const bannerPractice = isBigScreen ? bannerPracticeL : bannerPracticeSm

    return(
    <div className ="landingPage">
            <video className = "landingPage__video" autoPlay muted loop playsInline>
                <source src = {video} type="video/mp4" />
            </video>
        <div className ="landingPage__container">
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
                    <div className='landingPage__banner'>
                        <img className ="landingPage__banner--item" src={bannerNewYearL} alt="Fijne feestdagen en een gelukkig & gezond 2023!"/>
                    </div>
                    <div className='landingPage__banner'>
                        <img className ="landingPage__banner--item" src={bannerPractice}L alt="Repeteren"/>
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
                    <div className='landingPage__banner'>
                        <img className ="landingPage__banner--item" src={bannerNewYearSm} alt="Fijne feestdagen en een gelukkig & gezond 2023!"/>
                    </div>
                    <div className='landingPage__banner'>
                        <img className ="landingPage__banner--item" src={bannerPracticeSm} alt="Repeteren"/>
                    </div>
                </Slider>
            }
            <div className ="landingPage__container--img"></div>
        </div>
    </div>
    )
}

export default LandingPage;
