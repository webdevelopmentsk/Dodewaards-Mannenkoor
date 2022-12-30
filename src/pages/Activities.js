import React from 'react';
import Slider from 'infinite-react-carousel';
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
import image10 from '../assets/activities/jan.png'
import image11 from '../assets/activities/Keurig verzorgde lekkere hapjes.jpg'
import image12 from '../assets/activities/Gezelligheid met hapjes en partners.jpg'
import image13  from '../assets/activities/Avond met hapjes en gezelligheid.jpg'


const Activities = () =>{

    let captions = content.sections.activities.images.map(img => img.text);

    const carousel = () =>{

        return(
            <Slider className ="page__activities__slide" 
            dots
            arrows = {false}
            //autoplay ={true}
            //autoplayScroll = {1}
            //autoplaySpeed ={3500}
            >
                <div>
                    <div className ="page__activities__caption">{captions[13]}</div>
                    <img className ="page__activities__item" src ={image13} alt= {captions[13]}/>
                </div>
                <div>
                    <div className ="page__activities__caption">{captions[12]}</div>
                    <img className ="page__activities__item" src ={image12} alt= {captions[12]}/>
                </div>
                <div>
                    <div className ="page__activities__caption">{captions[11]}</div>
                    <img className ="page__activities__item" src ={image11} alt= {captions[11]}/>
                </div>
                <div>
                    <div className ="page__activities__caption">{captions[10]}</div>
                    <img className ="page__activities__item" src ={image10} alt= {captions[10]}/>
                </div>
                <div>
                    <div className ="page__activities__caption">{captions[9]}</div>
                    <img className ="page__activities__item" src ={image9} alt= {captions[9]}/>
                </div>
                <div>
                    <div className ="page__activities__caption">{captions[8]}</div>
                    <img className ="page__activities__item" src ={image8} alt= {captions[8]}/>
                </div>
                <div>
                    <div className ="page__activities__caption">{captions[7]}</div>
                    <img className ="page__activities__item" src ={image7} alt= {captions[7]}/>
                </div>
                <div>
                    <div className ="page__activities__caption">{captions[6]}</div>
                    <img className ="page__activities__item" src ={image6} alt= {captions[6]}/>
                </div>
                <div>
                    <div className ="page__activities__caption">{captions[5]}</div>
                    <img className ="page__activities__item" src ={image5} alt= {captions[5]}/>
                </div>
                <div>
                    <div className ="page__activities__caption">{captions[4]}</div>
                    <img className ="page__activities__item" src ={image4} alt= {captions[4]}/>
                </div>
                <div>
                    <div className ="page__activities__caption">{captions[3]}</div>
                    <img className ="page__activities__item" src ={image3} alt= {captions[3]}/>
                </div>
                <div>
                    <div className ="page__activities__caption">{captions[2]}</div>
                    <img className ="page__activities__item" src ={image2} alt= {captions[2]}/>
                </div>
                <div>
                    <div className ="page__activities__caption">{captions[1]}</div>
                    <img className ="page__activities__item" src ={image1} alt= {captions[1]}/>
                </div>
                <div>
                    <div className ="page__activities__caption">{captions[0]}</div>
                    <img className ="page__activities__item" src ={image0} alt= {captions[0]}/>
                </div>

            </Slider>
        );
    }


    return(
        <div className ="page__container">
            <div className ="parallax parallax__activities"></div>
            <div className ="page__heading heading--m">{content.sections.activities.heading}</div>
            <div className="page__section">
                <div className="page__activities">
                    {carousel()}
                </div>
            </div>

        </div>
    )
}

export default Activities;



/*
                    <div className ="page__activities__control">
                        <button className="btn btn__slide btn__slide--left" onClick= {() => displayImage(-1)}>&#10094;</button>
                        <div className ="page__activities__control__caption">{captions[slideIndex]}</div>
                        <button className="btn btn__slide btn__slide--right" onClick={() => displayImage(1)}>&#10095;</button>
                    </div>

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
*/