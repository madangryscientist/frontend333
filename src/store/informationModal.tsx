import { useState } from "react";
import "./informationModal.scss";
interface StoreProp {
  children: any;
}
export const InformationModal = ({ children }: StoreProp) => {
  const [buttonClick, setButtonClick] = useState(false);
  const handleOnClick = () => {
    setButtonClick(true);
  };
  const handleClose = () => {
    setButtonClick(false);
  };
  return (
    <div>
      <button
        id="myBtn"
        onClick={() => {
          handleOnClick();
        }}
      >
        Open Modal
      </button>
      <div
        id="myModal"
        className="modal"
        style={{ display: buttonClick ? "flex" : "none" }}
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
          <p>{children}</p>
        </div>
      </div>
    </div>
  );
};
