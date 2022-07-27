import React, { useState } from "react";

interface StoreProp {
  heading: string;
  itemColumnNumber: number;
  mainText: string;
}

export const StoreItems = ({ heading, mainText }: StoreProp) => {
  const [show, setShow] = useState(false);
  async function toggleChildren() {
    setShow(!show);
    console.log(toggleChildren);
  }
  const handleClose = () => {
    setShow(false);
  };
  return (
    <div className="storeItems">
      <h2 id="myBtn" className="storeHeading" onClick={() => toggleChildren()}>
        {heading}
      </h2>
      <div
        id="myModal"
        className="modal"
        style={{ display: show ? "flex" : "none" }}
      >
        <div className="modalContent">
          <span
            onClick={() => {
              handleClose();
            }}
            className="close"
          >
            &times;
          </span>
          <p dangerouslySetInnerHTML={{ __html: mainText }}></p>
        </div>
      </div>
    </div>
  );
};
