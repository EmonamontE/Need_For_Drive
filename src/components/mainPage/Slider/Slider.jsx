import React, { useRef } from 'react';
import Carousel from 'react-bootstrap/Carousel'

import './Slider.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Slider = () => {
  const ref = useRef(null);
  const onPrevClick = () => {
    ref.current.prev();
  };
  const onNextClick = () => {
    ref.current.next();
  };

  return(
    <Carousel
      interval={null}
      controls={false}
      ref={ref}
    >
      <Carousel.Item>
        <div className="slide_1">
          <button onClick={onPrevClick} className="prev_button"></button>
          <div className="slider_info">
            <h3 className="slider_info_title">
              Бесплатная парковка
            </h3>
            <p className="slider_info_description">
              Оставляйте машину на платных городских парковках и
              разрешенных местах, не нарушая ПДД, а также в аэропортах.
            </p>
            <button className="slider_1_info_button">
              Подробнее
            </button>
          </div>
          <button onClick={onNextClick} className="next_button">
          </button>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="slide_2">
          <button onClick={onPrevClick} className="prev_button"></button>
          <div className="slider_info">
            <h3 className="slider_info_title">
              Страховка
            </h3>
            <p className="slider_info_description">
              Полная страховка автомобиля
            </p>
            <button className="slider_2_info_button">
              Подробнее
            </button>
          </div>
          <button onClick={onNextClick} className="next_button"></button>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="slide_3">
          <button onClick={onPrevClick} className="prev_button"></button>
          <div className="slider_info">
            <h3 className="slider_info_title">
              Бензин
            </h3>
            <p className="slider_info_description">
              Полный бак на любой заправке города за наш счёт
            </p>
            <button className="slider_3_info_button">
              Подробнее
            </button>
          </div>
          <button onClick={onNextClick} className="next_button"></button>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="slide_4">
          <button onClick={onPrevClick} className="prev_button"></button>
          <div className="slider_info">
            <h3 className="slider_info_title">
              Обслуживание
            </h3>
            <p className="slider_info_description">
              Автомобиль проходит еженедельное ТО
            </p>
            <button className="slider_4_info_button">
              Подробнее
            </button>
          </div>
          <button onClick={onNextClick} className="next_button"></button>
        </div>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;
