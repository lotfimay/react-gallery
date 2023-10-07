import { useState } from "react";
import SearchBar from "./components/SearchBar";
import Gallery from "./components/Gallery";

function App() {
  const [searchText, setSearchText] = useState("");
  return (
    <>
      <div className="w-fit mx-auto my-8">
        <SearchBar value={searchText} setValue={setSearchText} />
      </div>
      <div className="p-8">
        <Gallery searchText={searchText} />
      </div>
    </>
  );
}

export default App;
