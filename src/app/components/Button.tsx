import React from "react";
import { Spinner } from "./Spinner";

export const Button = ({
  label,
  onClick,
  isDisabled = false,
  isLoading,
}: {
  label: string;
  onClick: () => void;
  isDisabled?: boolean;
  isLoading?: boolean;
}) => {
  return (
    <button
      className={`relative flex h-9 items-center justify-center gap-2 rounded-lg px-4 py-2.5 ${
        !isDisabled ? "bg-[#2f64ee] text-white" : "bg-[#f1f1f2] text-[#5f6065]"
      }`}
      disabled={isDisabled || isLoading}
      onClick={onClick}
    >
      {isLoading && <Spinner />}
      <span className="text-sm font-semibold leading-6 tracking-[0.2px]">
        {label}
      </span>
    </button>
  );
};
