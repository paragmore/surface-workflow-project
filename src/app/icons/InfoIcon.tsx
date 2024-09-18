import React from "react";

export const InfoIcon = ({ textColor }: { textColor: string }) => {
  return (
    <svg
      width="24"
      height="25"
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 24.5C5.3724 24.5 0 19.1276 0 12.5C0 5.8724 5.3724 0.5 12 0.5C18.6276 0.5 24 5.8724 24 12.5C24 19.1276 18.6276 24.5 12 24.5ZM10.8 16.1V18.5H13.2V16.1H10.8ZM10.8 6.5V13.7H13.2V6.5H10.8Z"
        fill={textColor}
      />
    </svg>
  );
};
