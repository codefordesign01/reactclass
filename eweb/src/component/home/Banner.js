import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import sliderimage1 from '../../images/slide_01.jpg'
import sliderimage2 from '../../images/slide_02.jpg'
import sliderimage3 from '../../images/slide_03.jpg'


const Banner = () => {
  return (
   <div>
    <Carousel>
      <Carousel.Item>
        <img src={sliderimage1} text="First slide" alt='' />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={sliderimage2} text="Second slide" alt='' />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={sliderimage3} text="Third slide" alt='' />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
   </div>
    
  )
}

export default Banner
