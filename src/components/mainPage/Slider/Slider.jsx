import React, { useRef } from 'react';
import Carousel from 'react-bootstrap/Carousel'

import styles from './slider.module.css';
import './carousel.css'
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
        <div className={ styles.slide_1 }>
          <button onClick={ onPrevClick } className={ styles.prev_button } />
          <div className={ styles.content }>
            <h3 className={ styles.title }>
              Бесплатная парковка
            </h3>
            <p className={ styles.description }>
              Оставляйте машину на платных городских парковках и
              разрешенных местах, не нарушая ПДД, а также в аэропортах.
            </p>
            <button className={ styles.slider_1_button }>
              Подробнее
            </button>
          </div>
          <button onClick={ onNextClick } className={ styles.next_button } />
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className={ styles.slide_2 }>
          <button onClick={ onPrevClick } className={ styles.prev_button } />
          <div className={ styles.content }>
            <h3 className={ styles.title }>
              Страховка
            </h3>
            <p className={ styles.description }>
              Полная страховка автомобиля
            </p>
            <button className={ styles.slider_2_button }>
              Подробнее
            </button>
          </div>
          <button onClick={ onNextClick } className={ styles.next_button } />
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className={ styles.slide_3 }>
          <button onClick={ onPrevClick } className={ styles.prev_button } />
          <div className={ styles.content }>
            <h3 className={ styles.title }>
              Бензин
            </h3>
            <p className={ styles.description }>
              Полный бак на любой заправке города за наш счёт
            </p>
            <button className={ styles.slider_3_button }>
              Подробнее
            </button>
          </div>
          <button onClick={ onNextClick } className={ styles.next_button } />
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className={ styles.slide_4 }>
          <button onClick={ onPrevClick } className={ styles.prev_button } />
          <div className={ styles.content }>
            <h3 className={ styles.title }>
              Обслуживание
            </h3>
            <p className={ styles.description }>
              Автомобиль проходит еженедельное ТО
            </p>
            <button className={ styles.slider_4_button }>
              Подробнее
            </button>
          </div>
          <button onClick={ onNextClick } className={ styles.next_button } />
        </div>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;
