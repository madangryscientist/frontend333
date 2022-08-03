import { useQuery } from "react-query";
import { Layout } from "../layout/layout";
import "./store.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./swiperStore.scss";
import { Pagination } from "swiper";
import { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPause, faPlay } from "@fortawesome/free-solid-svg-icons";
import TrackOne from "./trackOne";

const fetcher = () =>
  fetch("https://localhost:7072/Store").then((res) => res.json());
const Store = () => {
  const { data } = useQuery("https://localhost:7072/Store", fetcher);
  console.log("store", data);

  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };

  return (
    <Layout>
      <div className="outerStore">
        <div className="innerStore">
          <Swiper
            pagination={pagination}
            modules={[Pagination]}
            className="mySwiper"
          >
            <SwiperSlide className="storeSwiper">
              <TrackOne />
            </SwiperSlide>
            <SwiperSlide className="storeSwiper"></SwiperSlide>
            <SwiperSlide className="storeSwiper"></SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide>
            <SwiperSlide>Slide 5</SwiperSlide>
            <SwiperSlide>Slide 6</SwiperSlide>
            <SwiperSlide>Slide 7</SwiperSlide>
            <SwiperSlide>Slide 8</SwiperSlide>
            <SwiperSlide>Slide 9</SwiperSlide>
          </Swiper>
        </div>
      </div>
    </Layout>
  );
};

export default Store;
