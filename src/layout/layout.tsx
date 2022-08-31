import { useState } from "react";
import "./layout.scss";

import { Header } from "./header";

interface LogoProps {
  children: any;
  showAnimation?: boolean;
}

export const siteTitle = "Next.js Sample Website";

export const Layout = ({ children, showAnimation = false }: LogoProps) => {
  const [show, setShow] = useState(false);
  async function toggleText() {
    setShow(!show);
    console.log(toggleText);
  }

  return (
    <div className="outer">
      <div className="container">
        <Header showAnimation={showAnimation} />
        <div className="contactUsBox">
          <div className={show ? `` : `hide`}>
            <div className="innerContactBox">
              <div className="layoutBox ">
                <a
                  className="contactATag"
                  href="mailto: 3rdharmonicrecords@gmail.com?subject=Feedback&body=Message"
                  target="blank"
                >
                  <div className="contactIcon">
                    <img
                      src="../email.svg"
                      alt="email"
                      width="30px"
                      height="30px"
                    />
                  </div>
                  <p> 3rdharmonicrecords@gmail.com</p>
                </a>
              </div>
              <div className="layoutBox">
                <a
                  className="contactATag"
                  href="https://www.instagram.com/3rdharmonicrecords"
                  target="blank"
                >
                  <div className="contactIconInstagram">
                    <img
                      src="../instagram2.svg"
                      alt="instagram"
                      width="30px"
                      height="30px"
                    />
                  </div>
                  <p>@3RDHARMONICRECORDS</p>
                </a>
              </div>
              <div className="layoutBox">
                <a
                  className="contactATag"
                  href="https://www.instagram.com/iamhat3trick"
                  target="blank"
                >
                  <div className="contactIconInstagram">
                    <img
                      src="../instagram2.svg"
                      alt="instagram"
                      width="30px"
                      height="30px"
                    />
                  </div>
                  <p>@HAT3TRICK</p>
                </a>
              </div>
            </div>
          </div>
          <div className="contactUs" onClick={() => toggleText()}>
            <h5>Contact Us</h5>
            <button type="button" className={show ? "closeButton" : "hide"}>
              &times;
            </button>
          </div>
        </div>
        <main>{children}</main>
      </div>
    </div>
  );
};
