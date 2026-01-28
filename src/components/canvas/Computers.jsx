import React from "react";
import { profile } from "../../assets";

const ComputersCanvas = () => {
  return (
    <div className='w-full h-full flex justify-center items-center'>
      <img
        src={profile}
        alt='profile'
        className='w-64 h-64 lg:w-[400px] lg:h-[400px] rounded-full object-cover border-4 border-secondary mt-28 lg:mt-48'
      />
    </div>
  );
};

export default ComputersCanvas;
