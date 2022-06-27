import React from 'react';
// import  hatImg  from '../assets/hat.svg'
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
                    <div className="paragraph paragraph--dark u-font-p u-m-bottom-paragraph">
                        Vanaf nu zullen we elke donderdagavond om 19.30 uur repeteren. Dit vind plaats in de basisschool de Bellefleur, Marijkelaan 1 te Dodewaard.
                    </div>
                    <div className="paragraph paragraph--dark u-font-p u-m-bottom-paragraph">
                        We houden vakantie 19 Juni tot 18 Juli 2022
                    </div>
                    <div className="paragraph paragraph--dark u-font-p u-m-bottom-paragraph">
                        18 Augustus 2022 - De snackwagen van Henk Roodbeen komt!
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default LandingPage;
