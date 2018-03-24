import React, {Component} from 'react';
import Slider from 'react-slick';
import Landing from './landing';

class LandingSlide extends Component {
  settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    arrows: false
  };

  render() {
    return (
      <Slider {...this.settings}>
        <div><img style={{width: '100%', height: '100%'}} src="https://placehold.it/750x1334" /></div>
        <div><img style={{width: '100%', height: '100%'}} src="https://placehold.it/750x1334" /></div>
        <div><img style={{width: '100%', height: '100%'}} src="https://placehold.it/750x1334" /></div>
        <div><img style={{width: '100%', height: '100%'}} src="https://placehold.it/750x1334" /></div>
        <div><Landing/></div>
      </Slider>
    );
  }
}

export default LandingSlide;
