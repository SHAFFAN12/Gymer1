import React from 'react';
import  "../Stylesheet/Slider.css";
// import { Carousel } from 'antd';
import slide1 from '../components/assets/slider-1.jpg';

// const contentStyle = {
//   height: '30rem',
//   color: '#fff',
//   lineHeight: '20rem',
//   textAlign: 'center',
//   background: '#364d79',
// };

const Slider = () => (
//   <Carousel autoplay className='pt-10  mb-44'>
//     <div >
//       <h3 style={contentStyle}>1</h3>
//     </div>
//     <div>
//       <h3 style={contentStyle}>2</h3>
//     </div>
//     <div>
//       <h3 style={contentStyle}>3</h3>
//     </div>
//     <div>
//       <h3 style={contentStyle}>4</h3>
//     </div>
//   </Carousel>
<div class="slider">
        <input name="control" id="page1" type="radio" checked/>
        <input name="control" id="page2" type="radio"/>
        <input name="control" id="page3" type="radio"/>
        <input name="control" id="page4" type="radio"/>
        <div class="slider--el slider--el-1 anim-4parts">
            
          <div class="slider--el-bg">
            <div class="part top left"></div>
            <div class="part top right"></div>
            <div class="part bot left"></div>
            <div class="part bot right"></div>
          </div>
          <div class="slider--el-content">
            <h2 class="slider--el-heading">First slide</h2>
          </div>
        </div>
        <div class="slider--el slider--el-2 anim-9parts">
          <div class="slider--el-bg">
            <div class="part left-top"></div>
            <div class="part mid-top"></div>
            <div class="part right-top"></div>
            <div class="part left-mid"></div>
            <div class="part mid-mid"></div>
            <div class="part right-mid"></div>
            <div class="part left-bot"></div>
            <div class="part mid-bot"></div>
            <div class="part right-bot"></div>
          </div>
          <div class="slider--el-content">
            <h2 class="slider--el-heading">Second slide</h2>
          </div>
        </div>
        <div class="slider--el slider--el-3 anim-5parts">
          <div class="slider--el-bg">
            <div class="part part-1"></div>
            <div class="part part-2"></div>
            <div class="part part-3"></div>
            <div class="part part-4"></div>
            <div class="part part-5" style={{ backgroundImage:` url(${slide1})` }}></div>
          </div>
          <div class="slider--el-content">
            <h2 class="slider--el-heading">Third slide</h2>
          </div>
        </div>
            {/* <img src={slide1} className='h-[40rem]'/> */}
        <div class="slider--el slider--el-4 anim-3parts">
          <div class="slider--el-bg">
            <div class="part left"></div>
            <div class="part mid"></div>
            <div class="part right"></div>
          </div>
          <div class="slider--el-content">
            <h2 class="slider--el-heading">Fourth slide</h2>
          </div>
        </div>

        <div class="slider--control left">
          <label class="page1-left" for="page1"></label>
          <label class="page2-left" for="page2"></label>
          <label class="page3-left" for="page3"></label>
          <label class="page4-left" for="page4"></label>
        </div>
        <div class="slider--control right">
          <label class="page1-right" for="page1"></label>
          <label class="page2-right" for="page2"></label>
          <label class="page3-right" for="page3"></label>
          <label class="page4-right" for="page4"></label>
        </div>
      </div>
          


);

export default Slider;