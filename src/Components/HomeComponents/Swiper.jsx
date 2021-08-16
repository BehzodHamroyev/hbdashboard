import HomeCardWrapper from './HomeCardWrapper';
import Button from '@material-ui/core/Button';
import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/swiper.min.css';
import 'swiper/components/pagination/pagination.min.css';
// import Swiper core and required modules
import SwiperCore, { Pagination } from 'swiper/core';
// install Swiper modules
SwiperCore.use([Pagination]);
const Swipers = (props) => {
  console.log(props.data);
  return (
    <Swiper pagination={true} className="mySwiper">
      {props.data.map((v, i) => {
        return (
          <SwiperSlide>
            <div>
              {' '}
              <img src={v.img} className="comment w-100" alt="" />
              <div className="comment container pt-5">
                <h5 className=" pt-5">{v.title}</h5>
                <p className="fs-6 text-white">{v.subTitle}</p>
                {(v.btn && (
                  <Button
                    variant="contained"
                    className="bg-success text-white"
                    color="primary"
                  >
                    Buy
                  </Button>
                )) ||
                  ''}
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default Swipers;
