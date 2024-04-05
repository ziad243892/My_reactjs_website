
import React, { Component } from 'react';

import './Study.scss';

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


class Study extends Component {
    render() {
        return ( 
          <div className='container-fluid study'>
            <div className='row'>
                <div className='col-md-12'>
                  <h2>My Certificates</h2>
                  <Swiper className='mt-5'
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={10}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}>
      <SwiperSlide><img src={require('../../images/certi_1.png')} alt="Microsoft Certified" title="Microsoft Certified"/></SwiperSlide>
      <SwiperSlide><img src={require('../../images/certi_2.png')} alt="Microsoft Certified" title="Microsoft Certified"/></SwiperSlide>
      <SwiperSlide><img src={require('../../images/certi_3.png')} alt="Microsoft Certified" title="Microsoft Certified"/></SwiperSlide>
      <SwiperSlide><img src={require('../../images/certi_4.png')} alt="Adobe Certified Associate" title="Adobe Certified Associate"/></SwiperSlide>
      <SwiperSlide><img src={require('../../images/certi_5.png')} alt="Udmey Courses" title="Udmey Courses"/></SwiperSlide>
      <SwiperSlide><img src={require('../../images/certi_6.png')} alt="bachelor's degree in Graphic Design" title="bachelor's degree in Graphic Design"/></SwiperSlide>
    </Swiper>
                </div>
            </div>
          </div>
        )
    }
}

export default Study;