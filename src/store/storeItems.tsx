import React, { useState } from "react";

interface StoreProp {
  heading: string;
  children: any;
  itemColumnNumber: number;
}

export const StoreItems = ({ heading, children }: StoreProp) => {
  const [show, setShow] = useState(false);
  async function toggleChildren() {
    setShow(!show);
    console.log(toggleChildren);
  }
  return (
    <div className="storeItems">
      <h2 className="storeHeading" onClick={() => toggleChildren()}>
        {heading}
      </h2>
      <p className={show ? `` : `hide`}>{children}</p>
    </div>
  );
};
