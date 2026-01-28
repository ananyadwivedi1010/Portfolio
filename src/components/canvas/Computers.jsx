import React from "react";
import { profile } from "../../assets";

const ComputersCanvas = () => {
  return (
    <div className='w-full h-full flex justify-center items-center'>
      <img
        src={profile}
        alt='profile'
        className='w-80 h-80 lg:w-[450px] lg:h-[450px] rounded-full object-cover border-4 border-secondary mt-28 lg:mt-48'
      />
    </div>
  );
};

export default ComputersCanvas;
