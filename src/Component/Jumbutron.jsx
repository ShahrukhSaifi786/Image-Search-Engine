import React, { Children } from "react";

const Jumbutron = ({children}) => {
  // console.log(props)
  return (
    <div className="bg-gray-900 flex items-center py-10 px-3">
      <div className="max-w-md mx-auto w-full">
        <h1 className="text-white text-center text-2xl font-bold mb-5">
          Search Any Image
        </h1>
        {children}
      </div>
    </div>
  );
};

export default Jumbutron;
