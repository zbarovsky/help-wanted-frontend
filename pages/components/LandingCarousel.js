import React from 'react';
import Carousel from 'react-bootstrap/Carousel';


function LandingCarousel() {
    const banner = {
        "font":"white",
        "background-color":"rgb(231, 114, 46, 0.6)",
        "font-weight":"bold"
    }
    
    return (
        <div>  
            <div className='container-fluid' >  
            <Carousel>  
                <Carousel.Item style={{'height':"400px"}} >  
                    <img style={{'height':"400px"}}  
                    className="d-block w-100"  
                    src="https://images.unsplash.com/photo-1512295767273-ac109ac3acfa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80" alt="carousel img 1"  />  
                    <Carousel.Caption>  
                        <div >
                            <h3 style={banner}>Scientists claim UFO, known as Tesla, came from Earth</h3>  
                        </div>
                    </Carousel.Caption>  
                </ Carousel.Item>  

                <Carousel.Item style={{'height':"400px"}}>  
                    <img style={{'height':"400px"}}  
                        className="d-block w-100"  
                        src="https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="carousel img 2"   />  
                    <Carousel.Caption>  
                        <div >
                            <h3 style={banner}>What Kind of Spaceship Doesn't Have Lasers?</h3>  
                        </div>
                    </Carousel.Caption>  
                </Carousel.Item>  

                <Carousel.Item style={{'height':"400px"}}>  
                    <img style={{'height':"400px"}}  
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