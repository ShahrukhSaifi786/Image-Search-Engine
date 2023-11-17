
import { useState,useContext } from "react";
import { ImageContext } from "../App";
const SearchField = () => {
  const [searchValue, setSearchValue] = useState("");
  const { fetchData, setSearchImage } = useContext(ImageContext);
  const handleInputChange = (e) => {
    setSearchValue(e.target.value);
  };
  const handleButtonSearch = () => {
    setSearchValue("");
    fetchData(
      `search/photos?page=1&query=${searchValue}&client_id=${"cdDvmluAtm62ZM7J3HtdePkj29zVR0FtLkHkug0bakI"}`
    );
    setSearchImage(searchValue);
  };
  return (
    <>
      <div className="flex">
        <input
          className="bg-gray-50 border p-2.5 border-gray-300 text-sm w-full indent-2 outline-none focus:border-blue-500  focus:ring-2 rounded-tl rounded-bl "
          type="text"
          placeholder="Search Anything..."
          value={searchValue}
          onChange={handleInputChange}
          onKeyUp={(e) => {
            if (e.key === "Enter") {
              setSearchValue("");
              fetchData(
                `search/photos?page=1&query=${searchValue}&client_id=${"cdDvmluAtm62ZM7J3HtdePkj29zVR0FtLkHkug0bakI"}`
              );
              setSearchImage(searchValue);
            }
          }}
        />
        <button
          disabled={!searchValue}
          onClick={handleButtonSearch}
          className="bg-blue-600 px-6 py-2.5 text-white rounded-tr rounded-br transition-all duration-200 focus:ring-2 disabled:bg-gray-400"
        >
          Search
        </button>
      </div>
     
    </>
  );
};

export default SearchField;
