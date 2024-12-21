import React from 'react';
import { InfinitySpin } from 'react-loader-spinner';
import { useTheme } from '../Context'

const Loader = ({ height = 80, width = 80, colorLight = "#00BFFF", colorDark = "#ffffff" }) => {
  // Access the darkMode state from ThemeContext
  const { isDarkMode } = useTheme();

  // Set loader color based on the theme
  const loaderColor = isDarkMode ? colorDark : colorLight;

  return (
    <div className="flex justify-center items-center h-screen">
      <InfinitySpin color={loaderColor} height={height} width={width} />
    </div>
  );
};

export default Loader;
