import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import Head from 'next/head'

const LandingCarousel: React.FC = () => {
    const banner = {
        "font":"white",
        "background-color":"rgb(231, 114, 46, 0.6)",
        "font-weight":"bold"
    }
    
    return (
        <div> 
            
                <div className="carousel-parent">
                    <Carousel>
                       <div>
                           <img src="nickubed.jpeg" alt="carousel img 1"  />
                           <p className="legend">Learn from the greatest professionals!</p>
                       </div>
                       <div>
                           <img src="music-small.jpg" alt="carousel img 2"  />
                           <p className="legend">Create, Cover, and Expand your musical expertise</p>
                       </div>
                       <div>
                           <img src="sound.jpg" alt="carousel img 3" />
                           <p className="legend">Subscribe today! You never know where this journey can take you!</p>
                       </div>
                    </Carousel>
                </div>

        </div>

    )
}

export default LandingCarousel;