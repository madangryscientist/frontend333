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
const fetcher = () =>
  fetch("https://localhost:7072/Store").then((res) => res.json());
const Store = () => {
  const audioRef = useRef<HTMLAudioElement>();
  const [playing, setPlaying] = useState(true);
  const { data } = useQuery("https://localhost:7072/Store", fetcher);
  console.log("store", data);

  const handlePlay = () => {
    console.log("pl");
    let oppisite = !playing;
    setPlaying(oppisite);
    if (!oppisite) {
      audioRef.current?.play();
    } else {
      audioRef.current?.pause();
    }
  };

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
              <div className="trackSlides">
                <h3>Track 3 example</h3>
                <h4>BPM 140</h4>
                <p>A MINOR</p>
                <button type="button" className="fa-solid fa-play">
                  Purchase Options
                </button>
                <br />
                <button
                  type="button"
                  onClick={() => {
                    handlePlay();
                  }}
                  className="playPauseButton"
                >
                  <FontAwesomeIcon icon={!playing ? faPause : faPlay} />
                </button>

                <audio ref={audioRef as any}>
                  <source src="./gone.mp3" type="audio/mpeg" />
                </audio>
              </div>
            </SwiperSlide>
            <SwiperSlide className="storeSwiper">
              <div className="trackSlides">
                <h3>Track 3 example</h3>
                <h4>BPM 140</h4>
                <p>A MINOR</p>
                <button type="button" className="fa-solid fa-play">
                  Purchase Options
                </button>
                <br />
                <button
                  type="button"
                  onClick={() => {
                    handlePlay();
                  }}
                  className="playPauseButton"
                >
                  <FontAwesomeIcon icon={!playing ? faPause : faPlay} />
                </button>

                <audio ref={audioRef as any}>
                  <source src="./gone.mp3" type="audio/mpeg" />
                </audio>
              </div>
            </SwiperSlide>
            <SwiperSlide className="storeSwiper">
              <div className="trackSlides">
                <h3>Track 3 example</h3>
                <h4>BPM 140</h4>
                <p>A MINOR</p>
                <button type="button" className="fa-solid fa-play">
                  Purchase Options
                </button>
                <br />
                <button
                  type="button"
                  onClick={() => {
                    handlePlay();
                  }}
                  className="playPauseButton"
                >
                  <FontAwesomeIcon icon={!playing ? faPause : faPlay} />
                </button>

                <audio ref={audioRef as any}>
                  <source src="./gone.mp3" type="audio/mpeg" />
                </audio>
              </div>
            </SwiperSlide>
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
