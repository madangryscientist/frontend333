import { useQuery } from "react-query";
import { Layout } from "../layout/layout";
import { StoreItems } from "./storeItems";
import "./store.scss";
import { Carousel } from "3d-react-carousal";
import { useState } from "react";
const fetcher = () =>
  fetch("https://localhost:7072/Store").then((res) => res.json());
const Store = () => {
  const [pause, setPause] = useState(true);
  const { data } = useQuery("https://localhost:7072/Store", fetcher);
  console.log("store", data);

  const callback = function (index) {
    console.log("callback", index);
  };

  const handlePlay = () => {
    console.log("pl");
    let oppisite = pause ? false : true;
    setPause(oppisite);
  };

  return (
    <Layout>
      <div className="outerStore">
        <Carousel
          slides={[
            <div className="trackSlides">
              <h3>Track 3 example</h3>
              <h4>BPM 140</h4>
              <p>A MINOR</p>
              <button type="button" className="fa-solid fa-play">
                Purchase Options
              </button>
              <button
                type="button"
                onClick={() => {
                  handlePlay();
                }}
                className={pause ? "pause" : "fa-solid fa-play"}
              >
                Play
              </button>
            </div>,
            <div className="trackSlides">
              <h3>Track 3 example</h3>
              <h4>BPM 140</h4>
              <p>A MINOR</p>
              <button type="button"> Purchase Options</button>
              <button type="button">Play</button>
            </div>,
            <div className="trackSlides">
              <h3>Track 3 example</h3>
              <h4>BPM 140</h4>
              <p>A MINOR</p>
              <button type="button"> Purchase Options</button>
              <button type="button">Play</button>
            </div>,

            ,
          ]}
          onSlideChange={callback}
        />
      </div>
    </Layout>
  );
};

export default Store;
