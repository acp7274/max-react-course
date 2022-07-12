import React from "react";
import "./Background.css";

const Background = (props: {
  color: any;
  children:
    | string
    | number
    | boolean
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | React.ReactFragment
    | React.ReactPortal
    | null
    | undefined;
}) => {
  const newColor = props.color;
  return (
    <>
      <div className="background-container">
        <div className="background" style={{ backgroundColor: newColor }}>
          {props.children}
        </div>
      </div>
    </>
  );
};

export default Background;
