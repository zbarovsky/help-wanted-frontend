import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
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
                <link
                    rel="stylesheet"
                    href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
                    integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z"
                    crossOrigin ="anonymous"
                />
            </Head> 


            <div className='container-fluid' >  
            <Carousel>  
                <Carousel.Item style={{'height':"500px"}} >  
                    <img style={{'height':"500px"}}  
                    className="d-block w-100"  
                    src="/nickubed.jpeg" width="600" alt="carousel img 1"  />  
                    <Carousel.Caption>  
                        <div >
                            <h3>Learn from legendary instructors </h3>  
                        </div>
                    </Carousel.Caption>  
                </ Carousel.Item>  

                <Carousel.Item style={{'height':"500px"}}>  
                    <img style={{'height':"500px"}}  
                        className="d-block w-100"  
                        src="https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="carousel img 2"   />  
                    <Carousel.Caption>  
                        <div >
                            <h3 style={banner}>What Kind of Spaceship Doesn't Have Lasers?</h3>  
                        </div>
                    </Carousel.Caption>  
                </Carousel.Item>  

                <Carousel.Item style={{'height':"500px"}}>  
                    <img style={{'height':"500px"}}  
                        className="d-block w-100"  
                        src="https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="carousel img 3"  />  
                    <Carousel.Caption>  
                        <div>
                            <h3 style={banner}>Football vs Football. What's the Difference?</h3>  
                        </div>
                    </Carousel.Caption>  
                </Carousel.Item>  
            </Carousel>  
            </div>  
        </div>  

    )
}

export default LandingCarousel;