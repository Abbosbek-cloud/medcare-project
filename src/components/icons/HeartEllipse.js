import React from "react";

const HeartEllipse = (props) => {
  return (
    <svg
      width="61"
      height="61"
      viewBox="0 0 61 61"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle opacity="0.2" cx="30.5" cy="30.5" r="30.5" fill="white" />
    </svg>
  );
};

export default HeartEllipse;
