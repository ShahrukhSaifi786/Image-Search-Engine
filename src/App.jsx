import React, { createContext, useState } from "react";
import Jumbutron from "./Component/Jumbutron";
import SearchField from "./Component/SearchField";
import Images from "./Component/Images";
import useAxios from "./Hooks/useAxios";
// Create Contect
export const ImageContext = createContext();
const App = () => {
  const [searchImage, setSearchImage] = useState("");
  const { response, isLoading, error, fetchData } = useAxios(
    `search/photos?page=1&query=cat&client_id=${"cdDvmluAtm62ZM7J3HtdePkj29zVR0FtLkHkug0bakI"}`
  );
  const value = {
    response,
    isLoading,
    error,
    fetchData,
    searchImage,
    setSearchImage,
  };
  return (
    <>
      <ImageContext.Provider value={value}>
        <Jumbutron>
          <SearchField />
        </Jumbutron>
        <Images />
      </ImageContext.Provider>
    </>
  );
};

export default App;
