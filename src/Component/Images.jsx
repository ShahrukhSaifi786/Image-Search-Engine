import React, { useContext } from "react";
import { ImageContext } from "../App";
import Image from "./Image";
import Skeletion from "./Skeletion";

const Images = () => {
  const { response, isLoading, searchImage } = useContext(ImageContext);
  return (
    <>
      <h1 className="text-center mt-6  text-2xl">
        Results for {searchImage.toUpperCase() || "CATS"}
      </h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3  gap-4 my-10 max-w-7xl mx-auto px-4">
        {isLoading ? (
          <Skeletion itemcount={10} />
        ) : (
          response.slice(0, 9).map((data, i) => {
            return <Image uniqKey={i} data={data} />;
          })
        )}
        {isLoading ? (
          <Skeletion itemcount={10} />
        ) : (
          response.slice(0, 9).map((data, i) => {
            return <Image uniqKey={i} data={data} />;
          })
        )}
      
      </div>
    </>
  );
};

export default Images;
