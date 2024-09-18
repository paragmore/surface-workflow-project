import React from "react";

export const Button = ({
  label,
  onClick,
  isDisabled = false,
}: {
  label: string;
  onClick: () => void;
  isDisabled?: boolean;
}) => {
  return (
    <button
      className={`relative flex h-9 items-center justify-center gap-2 rounded-lg px-4 py-2.5 ${
        !isDisabled ? "bg-[#2f64ee] text-white" : "bg-[#f1f1f2] text-[#5f6065]"
      }`}
      disabled={isDisabled}
      onClick={onClick}
    >
      <span className="text-sm font-semibold leading-6 tracking-[0.2px]">
        {label}
      </span>
    </button>
  );
};
