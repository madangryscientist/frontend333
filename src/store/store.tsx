import { useQuery } from "react-query";
import { Layout } from "../layout/layout";
import "./store.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./swiperStore.scss";
import { Pagination } from "swiper";

import TrackOne from "./trackOne";

const fetcher = () =>
  fetch("https://localhost:7072/Store/TracksInput").then((res) => res.json());
const Store = () => {
  const { data } = useQuery("Tracks", fetcher);
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
            {data?.map((element) => {
              return (
                <SwiperSlide className="storeSwiper">
                  <TrackOne
                    trackName={element.trackName}
                    bpm={element.bpm}
                    tune={element.tune}
                    songUrl={element.songUrl}
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </Layout>
  );
};

export default Store;
