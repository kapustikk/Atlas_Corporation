import React, { Component } from 'react';
import { createPortal } from 'react-dom';

import { Swiper } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import s from '../Swiper/Swiper.module.css';

// import photo1ForProject1 from '../images/project1/photo1.jpg';
// import photo2ForProject1 from '../images/project1/photo2.jpg';
// import photo3ForProject1 from '../images/project1/photo3.jpg';
// import photo4ForProject1 from '../images/project1/photo4.jpg';

SwiperCore.use([Navigation, Pagination]);

const swiperRoot = document.querySelector('#swiper-root');

export default class AddSwiper extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeydown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeydown);
  }

  handleKeydown = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };

  handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      this.props.onClose();
    }
  };

  render() {
    return createPortal(
      <div className={s.swiperOverlay} onClick={this.handleBackdropClick}>
        <Swiper
          className={s.swiper}
          spaceBetween={500}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          onSlideChange={() => console.log('slide change')}
          onSwiper={swiper => console.log(swiper)}
        >
          {this.props.children}
        </Swiper>
        <button
          type="button"
          data-action="close-modal"
          className={s.close}
          onClick={() => {
            this.props.onClose();
          }}
        ></button>
      </div>,
      swiperRoot,
    );
  }
}
