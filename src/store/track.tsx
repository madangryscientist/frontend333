import "./store.scss";

import "swiper/css";
import "swiper/css/pagination";
import "./swiperStore.scss";

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPause, faPlay, faXmark } from "@fortawesome/free-solid-svg-icons";
import "./card.scss";
import { useSwiperSlide } from "swiper/react";
import { useFormik } from "formik";
import { StoreContactUsDbModel } from "../models/StoreModel";

interface TrackProps {
  trackId: number;
  trackName: string;
  bpm: number;
  tune: string;
  playing: boolean;
  onTogglePlay: () => void;
}

const Track = ({
  trackId,
  trackName,
  bpm,
  tune,
  playing,
  onTogglePlay,
}: TrackProps) => {
  const [flip, setFlip] = useState(false);
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [messageClass, setMessageClass] = useState("");
  const swiperSlide = useSwiperSlide();
  const formik = useFormik<StoreContactUsDbModel>({
    initialValues: {
      trackId: trackId,
      name: "",
      email: "",
    },
    onSubmit: async (values, { resetForm }) => {
      const result = await fetch("https://localhost:7072/Store/Test", {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(values),
      });

      await result.json();
      resetForm();
      setMessage("Details Will be Emailed to You");
      setSubmitted(true);
      setMessageClass("Success");
      setTimeout(() => {
        console.log("effect", formik.values, submitted);

        setMessageClass("");
        setSubmitted(false);
        setMessage("");
      }, 2000);
    },
  });
  const handleFlip = () => {
    setFlip(!flip);
  };
  const handleClick = () => {
    onTogglePlay();
  };
  // console.log(flip, "flipped");
  return (
    <div
      className={flip && swiperSlide.isActive ? "flip-card turn" : "flip-card"}
    >
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <h3>{trackName}</h3>
          <h4>BPM {bpm}</h4>
          <p>{tune}</p>
          <div></div>
          <button
            className="options"
            type="button"
            onClick={() => {
              handleFlip();
            }}
          >
            I WANT THIS BEAT
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
        <div className="flip-card-back">
          <button
            className="backButton"
            onClick={() => {
              handleFlip();
            }}
          >
            <FontAwesomeIcon icon={faXmark} />
          </button>
          <form onSubmit={formik.handleSubmit}>
            <div className="purchaseForm">
              <div className="purchaseLabel">
                <label htmlFor="name">Name</label>
              </div>
              <input
                className="purchaseInput"
                id="name"
                name="name"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.name}
              />

              <div className="purchaseLabel">
                <label htmlFor="email">Email Address</label>
              </div>
              <input
                className="purchaseInput"
                id="email"
                name="email"
                type="email"
                onChange={formik.handleChange}
                value={formik.values.email}
              />
              <div className="submitButton">
                <button className="onSubmit" type="submit">
                  Submit
                </button>
                <div className="message">{message}</div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Track;
