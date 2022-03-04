import React from 'react';
import  hatImg  from '../assets/hat.svg'
const LandingPage = () =>{

    return(
        <div className ="page__container">
            <div className ="landingPage__container">
            {/* <div class="snowflakes" aria-hidden="true">
                <div class="snowflake">
                ❅
                </div>
                <div class="snowflake">
                ❅
                </div>
                <div class="snowflake">
                ❆
                </div>
                <div class="snowflake">
                ❄
                </div>
                <div class="snowflake">
                ❅
                </div>
                <div class="snowflake">
                ❆
                </div>
                <div class="snowflake">
                ❄
                </div>
                <div class="snowflake">
                ❅
                </div>
                <div class="snowflake">
                ❆
                </div>
                <div class="snowflake">
                ❄
                </div>
            </div> */}
            <div className="landingPage__update--container">
                {/* <img src={hatImg} alt="hat" className='landingPage__update__hat'/> */}
                <h1 className='landingPage__update__welcome u-text-white'>Welkom op de website van het Dodewaards Mannenkoor!</h1>
                <div className="landingPage__update--wrap">
                    <div className ="heading--m u-text-gold u-m-bottom-paragraph">Nieuws</div>
                    <div className="paragraph paragraph--dark u-font-p u-m-bottom-paragraph">Per 3 maart jongstleden zijn we na lang wachten weer begonnen met onze eerste repitie! Hier zijn we heel blij mee. Vanaf nu zullen we elke donderdagavond weer repeteren met elkaar.</div>
                    <div className="paragraph paragraph--dark u-font-p">
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default LandingPage;
