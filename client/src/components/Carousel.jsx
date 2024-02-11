import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';
import './Carousel.css';
const AutoplaySlider = withAutoplay(AwesomeSlider);

import img1 from '../assets/dfs.jpeg';
import img2 from '../assets/qwe.jpg';
import img3 from '../assets/ud.jpg';
import img4 from '../assets/wrt.jpg';

function Carousel(props) {
  return (
    <div className='mt-6 mb-10'>
      <AutoplaySlider
        play={true}
        cancelOnInteraction={false} // should stop playing on user interaction
        interval={6000}
      >
        <div data-src={img1} />
        <div data-src={img2} />
        <div data-src={img3} />
        <div data-src={img4} />
      </AutoplaySlider>
    </div>
  );
}

export default Carousel;
