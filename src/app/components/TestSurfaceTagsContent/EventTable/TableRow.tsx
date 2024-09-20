import React from "react";
import useDeviceResolution from "~/app/hooks/useDeviceResolution";

type TableRowProps = {
  children: React.ReactNode;
};

export const TableRow: React.FC<TableRowProps> = ({ children }) => {
  const { isMobile, isTablet } = useDeviceResolution();
  const isSmallScreen = isMobile || isTablet;
  return (
    <tr
      className={
        isSmallScreen
          ? "flex flex-col md:table-row"
          : "flex grid grid-cols-[2fr_2fr_6fr_2fr] flex-col gap-4 md:table-row md:grid md:gap-0"
      }
    >
      {children}
    </tr>
  );
};
