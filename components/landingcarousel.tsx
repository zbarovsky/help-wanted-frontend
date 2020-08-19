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
            <Head>
                <script
                    rel="stylesheet"
                    href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
                    integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z"
                    crossOrigin ="anonymous"
                />

            </Head> 


                <div className="carousel-parent">
                    <Carousel className={styles}>
                       <div>
                           <img src="https://images.unsplash.com/photo-1512295767273-ac109ac3acfa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80" alt="carousel img 1"  />
                           <p className="legend">Build your portfolio!</p>
                       </div>
                       <div>
                           <img src="https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="carousel img 2" />
                           <p className="legend">Collaborate with others!</p>
                       </div>
                       <div>
                           <img src="https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="carousel img 3" />
                           <p className="legend">Expand your techonological knowledge!</p>
                       </div>
                    </Carousel>
                </div>
        </div>

    )
}

export default LandingCarousel;