import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="font-bold text-blue-500 w-fit m-auto text-8xl">
        Hello world !
      </h1>
    </>
  );
}

export default App;
