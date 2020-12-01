import React , { useState, useEffect } from 'react';
import { content } from '../data/content';
import  image0  from '../assets/activities/Deelname aan winkel van sinkel.jpg'
import  image1  from '../assets/activities/Deelnemers oldtimerrit.jpg'
import  image2  from '../assets/activities/Kerststukjes maken.jpg'
import  image3  from '../assets/activities/Nieuwjaarsbijeenkomst.jpg'
import  image4  from '../assets/activities/Nieuwjaarsreceptie.jpg'
import  image5  from '../assets/activities/Optocht bevrijdingsdag 5-05-2015-1.jpg'
import  image6  from '../assets/activities/Optocht bevrijdingsdag 5-05-2015-2.jpg'
import  image7  from '../assets/activities/Verkoop kerstbakjes.jpg'
import  image8  from '../assets/activities/Visdag met barbecue.jpg'
import  image9  from '../assets/activities/Wat zou er aanzitten.jpg'

const Activities = () =>{
    const [slideIndex, setSlideIndex] = useState(0);
    let slides = document.getElementsByClassName("page__activities__slide__item");
    let captions = content.sections.activities.images.map(img => img.text);

    const displayImage = n => {
        let currentIndex = slideIndex + n;
        if(currentIndex < 0) {setSlideIndex(slides.length-1);}
        else if(currentIndex >= slides.length -1){setSlideIndex(0);}
        if (currentIndex >= 0 && currentIndex <= slides.length-1 ) {setSlideIndex(currentIndex);}
    };


    return(
        <div className ="page__container">
            <div className ="parallax parallax__activities"></div>
            <div className ="page__heading heading--m">{content.sections.activities.heading}</div>
            <div className="page__section">
                <div className="page__activities">
                    <div className ="page__activities__control">
                        <button className="btn btn__slide btn__slide--left" onClick= {() => displayImage(-1)}>&#10094;</button>
                        <div className ="page__activities__control__caption">{captions[slideIndex]}</div>
                        <button className="btn btn__slide btn__slide--right" onClick={() => displayImage(1)}>&#10095;</button>
                    </div>
                    <div className ="page__activities__slide">
                        <img className ={slideIndex === 0 ? 'page__activities__slide__item--open' :'page__activities__slide__item'} src ={image0} alt= {content.sections.activities.images[0].text}/>
                        <img className ={slideIndex === 1 ? 'page__activities__slide__item--open' :'page__activities__slide__item'} src ={image1} alt= {content.sections.activities.images[1].text}/>
                        <img className ={slideIndex === 2 ? 'page__activities__slide__item--open' :'page__activities__slide__item'} src ={image2} alt= {content.sections.activities.images[2].text}/>
                        <img className ={slideIndex === 3 ? 'page__activities__slide__item--open' :'page__activities__slide__item'} src ={image3} alt= {content.sections.activities.images[3].text}/>
                        <img className ={slideIndex === 4 ? 'page__activities__slide__item--open' :'page__activities__slide__item'} src ={image4} alt= {content.sections.activities.images[4].text}/>
                        <img className ={slideIndex === 5 ? 'page__activities__slide__item--open' :'page__activities__slide__item'} src ={image5} alt= {content.sections.activities.images[5].text}/>
                        <img className ={slideIndex === 6 ? 'page__activities__slide__item--open' :'page__activities__slide__item'} src ={image6} alt= {content.sections.activities.images[6].text}/>
                        <img className ={slideIndex === 7 ? 'page__activities__slide__item--open' :'page__activities__slide__item'} src ={image7} alt= {content.sections.activities.images[7].text}/>
                        <img className ={slideIndex === 8 ? 'page__activities__slide__item--open' :'page__activities__slide__item'}src ={image8} alt= {content.sections.activities.images[8].text}/>
                        <img className ={slideIndex === 9 ? 'page__activities__slide__item--open' :'page__activities__slide__item'} src ={image9} alt= {content.sections.activities.images[9].text}/>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Activities;



