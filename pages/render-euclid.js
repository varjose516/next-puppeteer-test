import React from "react";

const Render = () => {
  return (
    <div
      style={{
        width: `631px`,
        height: "270px",
        marginTop: "24px",
        backgroundColor: "white",
        padding: "24px",
      }}
    >
      {[0, 1].map((item, index) => {
        return (
          <React.Fragment key={`templateF-yLabel-${index}`}>
            <div
              className="euclid-font"
              style={{
                fontSize: `19px`,
                color: "white",
                display: "flex",
                alignItems: "center",
                flexGrow: 1,
                backgroundColor: "black",
                height: "100%",
                maxHeight: "42px",
                paddingLeft: "12px",
                paddingRight: "12px",
              }}
            >
              Test {index}
            </div>
            <div>&nbsp;</div>
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default Render