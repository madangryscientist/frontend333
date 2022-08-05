import "./store.scss";

import "swiper/css";
import "swiper/css/pagination";
import "./swiperStore.scss";

import { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPause, faPlay, faXmark } from "@fortawesome/free-solid-svg-icons";
import "./card.scss";

interface TrackProps {
  trackName: string;
  bpm: number;
  tune: string;
  songUrl: string;
}
const fetcher = () =>
  fetch("https://localhost:7072/Tracks").then((res) => res.json());

const TrackOne = ({ trackName, bpm, tune, songUrl }: TrackProps) => {
  const audioRef = useRef<HTMLAudioElement>();
  const [playing, setPlaying] = useState(true);
  const [flip, setFlip] = useState(false);
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
  const handleFlip = () => {
    setFlip(!flip);
  };
  console.log(flip, "flipped");
  return (
    <div className={flip ? "flip-card turn" : "flip-card"}>
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <h3>{trackName}</h3>
          <h4>{bpm}</h4>
          <p>{tune}</p>
          <button
            type="button"
            className="options"
            onClick={() => {
              handleFlip();
            }}
          >
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
            <source src={songUrl} type="audio/mpeg" />
            {songUrl}
          </audio>
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

export default TrackOne;
