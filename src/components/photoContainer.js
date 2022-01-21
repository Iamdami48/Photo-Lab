import React from "react";

export function PhotoContainer({ image, styledDiv }) {
  return (
    <>
      <div style={styledDiv} className="styled-div">
        {!image && (
          <h1
            style={{
              color: "var(--color)",
              position: "relative",
              top: "50%",
              left: "25%",
              fontFamily: "monospace"
            }}
          >
            Your Image Here
          </h1>
        )}
      </div>
      {/* <img src={image} alt="myphoto" style={styledDiv} className="styled-div" /> */}
    </>
  );
}
