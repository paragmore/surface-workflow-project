import { useMediaQuery } from "react-responsive";

const useDeviceResolution = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isTablet = useMediaQuery({ maxWidth: 991 });

  return { isMobile, isTablet };
};

export default useDeviceResolution;
