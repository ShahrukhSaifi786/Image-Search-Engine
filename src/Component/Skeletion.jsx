import React from "react";

const Skeletion = (props) => {
  return [...Array(props.itemcount).keys()].map(() => {
    return (
      <div className="animate-pulse">
        <div className="bg-gray-300 rounded-lg h-72"></div>
      </div>
    );
  });
};

export default Skeletion;
