import React from "react";

export const CircleTickIcon = ({
  bgColor,
  textColor,
}: {
  bgColor: string;
  textColor: string;
}) => {
  return (
    <>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="24" height="24" rx="12" fillOpacity="100" fill={bgColor} />
        <path
          d="M10.8028 13.9025L16.318 8.38672L17.167 9.23512L10.8028 15.5993L6.98438 11.7809L7.83278 10.9325L10.8028 13.9025Z"
          fill={textColor}
          fillOpacity="0.40"
        />
      </svg>
    </>
  );
};
