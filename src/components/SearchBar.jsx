import React from "react";

const SearchBar = ({ value, setValue }) => {
  const search = () => {
    console.log(value);
  };

  return (
    <div className="font-mono">
      <form
        action=""
        onSubmit={(e) => e.preventDefault()}
        className="flex items-center justify-center gap-1 drop-shadow"
      >
        <input
          type="text"
          className="p-2 outline-none border focus:border-green-400 rounded-md"
          placeholder="Search for an item"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button
          type="submit"
          className="bg-green-400 py-2 px-3 text-white font-semibold rounded-md"
          onClick={(e) => search()}
        >
          Seach
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
