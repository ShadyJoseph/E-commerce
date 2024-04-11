import React from 'react';
import { InfinitySpin } from 'react-loader-spinner';

const Loader = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <InfinitySpin color="#00BFFF" height={80} width={80} />
    </div>
  );
}

export default Loader;
