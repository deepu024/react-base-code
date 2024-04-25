import { useState } from "react";
import NavBar from "./components/Navbar";

function App() {

  const [counter, setCounter] = useState(0);

  function handleClick() {
    setCounter(counter + 1);
  }

  return (
    <>
      <NavBar />
      <p className="text-3xl">Counter: {counter}</p>
      <button onClick={handleClick} className="border-2 text-xl p-4">Click Me to Update</button>
    </>
  );

}

export default App;