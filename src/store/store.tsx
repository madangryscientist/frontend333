import { useQuery } from "react-query";
import { Layout } from "../layout/layout";
import "./store.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./swiperStore.scss";
import { EffectCoverflow, Keyboard, Navigation, Pagination } from "swiper";
import "swiper/css/navigation";
import Track from "./track";
import "swiper/css/effect-coverflow";

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
            keyboard={{
              enabled: true,
            }}
            loop={true}
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={3}
            slidesPerGroup={1}
            spaceBetween={30}
            loopFillGroupWithBlank={true}
            coverflowEffect={{
              rotate: 10,
              stretch: 0,
              depth: 80,
              modifier: 1,
              slideShadows: true,
            }}
            navigation={true}
            pagination={pagination}
            modules={[EffectCoverflow, Keyboard, Pagination, Navigation]}
            className="mySwiper"
          >
            {data?.map((element) => {
              return (
                <SwiperSlide className="storeSwiper" key={element.id}>
                  <Track
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
