import { useQuery } from "react-query";
import { Layout } from "../layout/layout";
import "./store.scss";
import { Swiper, SwiperSlide, useSwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./swiperStore.scss";
import { EffectCoverflow, Keyboard, Navigation, Pagination } from "swiper";
import "swiper/css/navigation";
import Track from "./track";
import "swiper/css/effect-coverflow";
import { useRef, useState } from "react";
import { Helmet } from "react-helmet";

const fetcher = () =>
  fetch("https://localhost:7072/Store/TracksInput").then((res) => res.json());
const Store = () => {
  const audioRef = useRef<HTMLAudioElement>();
  const { data } = useQuery("Tracks", fetcher);
  const [realIndex, setRealIndex] = useState(0);
  const [playing, setPlaying] = useState(false);
  console.log("store", data);

  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };
  const HanldeOnSlideChange = (swipe) => {
    setRealIndex(swipe.realIndex);
    audioRef.current?.load();
    console.log("on slide ", playing);
    setPlaying(false);
    console.log(swipe.realIndex);
  };
  const handlePlay = () => {
    let oppisite = !playing;
    console.log("pl", oppisite);

    setPlaying(oppisite);
    if (oppisite) {
      audioRef.current?.load();
      audioRef.current?.play();
    } else {
      audioRef.current?.pause();
    }
  };

  return (
    <Layout>
      <Helmet>
        <title>Store</title>
        <link rel="canonical" href="/store" />
        <meta
          name="description"
          content="3rdHarmonicRecords store page to view tracks availible for purchase"
        />
        <meta
          name="keywords"
          content="3rdHarmonicRecords, store, music, hiphop"
        />
      </Helmet>
      <div className="outerStore">
        <div className="innerStore">
          <audio ref={audioRef as any}>
            <source
              src={
                data?.[realIndex].songUrl ??
                "http://localhost:3000/TotalEclipseOfTheHeart.mp3"
              }
              type="audio/mpeg"
            />
            {data?.[realIndex].songUrl ??
              "http://localhost:3000/TotalEclipseOfTheHeart.mp3"}
          </audio>
          <Swiper
            keyboard={{
              enabled: true,
            }}
            rewind={true}
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
              depth: 70,
              modifier: 1,
              slideShadows: true,
            }}
            navigation={true}
            pagination={pagination}
            modules={[EffectCoverflow, Keyboard, Pagination, Navigation]}
            className="mySwiper"
            onSlideChange={(swipe) => {
              HanldeOnSlideChange(swipe);
            }}
          >
            {data?.map((element) => {
              return (
                <SwiperSlide className="storeSwiper" key={element.id}>
                  <Track
                    trackName={element.trackName}
                    bpm={element.bpm}
                    tune={element.tune}
                    playing={playing}
                    onTogglePlay={() => handlePlay()}
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
