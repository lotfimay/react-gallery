import { useState } from "react";
import SearchBar from "./components/SearchBar";

function App() {
  const [searchText, setSearchText] = useState("Test");
  return (
    <>
      <div className="w-fit mx-auto my-8">
        <SearchBar value={searchText} setValue={setSearchText} />
      </div>
    </>
  );
}

export default App;
