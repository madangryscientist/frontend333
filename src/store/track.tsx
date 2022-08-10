import "./store.scss";

import "swiper/css";
import "swiper/css/pagination";
import "./swiperStore.scss";

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPause, faPlay, faXmark } from "@fortawesome/free-solid-svg-icons";
import "./card.scss";
import { useSwiperSlide } from "swiper/react";

interface TrackProps {
  trackName: string;
  bpm: number;
  tune: string;
  playing: boolean;
  onTogglePlay: () => void;
}

const Track = ({ trackName, bpm, tune, playing, onTogglePlay }: TrackProps) => {
  const [flip, setFlip] = useState(false);
  const swiperSlide = useSwiperSlide();
  const handleFlip = () => {
    setFlip(!flip);
  };
  const handleClick = () => {
    onTogglePlay();
  };
  // console.log(flip, "flipped");
  return (
    <div className={flip ? "flip-card turn" : "flip-card"}>
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <h3>{trackName}</h3>
          <h4>BPM {bpm}</h4>
          <p>{tune}</p>
          <button
            type="button"
            className="options"
            onClick={() => {
              handleFlip();
            }}
          >
            PURCHASE OPTIONS
          </button>
          <br />
          {swiperSlide.isActive && (
            <button
              type="button"
              onClick={() => {
                handleClick();
              }}
              className="playPauseButton"
            >
              <FontAwesomeIcon icon={playing ? faPause : faPlay} />
            </button>
          )}
        </div>
        <div
          className="flip-card-back"
          onClick={() => {
            handleFlip();
          }}
        >
          <button className="backButton">
            <FontAwesomeIcon icon={faXmark} />
          </button>
          Back of Card
        </div>
      </div>
    </div>
  );
};

export default Track;
