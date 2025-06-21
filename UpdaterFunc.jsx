import { useState } from "react";

const UpdaterFunc = () => {
  const [count, setCount] = useState(0);
  let buttonarr = ["Increase", "Reset", "Decrease"];

  const handleClick = (curr) => {
    if (curr === "Increase") {
      setCount((prev) => prev + 1);
      setCount((prev) => prev + 1);
      setCount((prev) => prev + 1);
    } else if (curr === "Decrease") {
      setCount((prev) => prev - 1);
      setCount((prev) => prev - 1);
      setCount((prev) => prev - 1);
    } else setCount(0);
  };
  //   const increaseCount = () => {
  //     setCount((prev) => prev + 1);
  //     setCount((prev) => prev + 1);
  //     setCount((prev) => prev + 1);
  //   };
  //   const resetCount = () => {
  //     setCount(0);
  //   };
  //   const decreaseCount = () => {
  //     setCount((prev) => prev - 1);
  //     setCount((prev) => prev - 1);
  //     setCount((prev) => prev - 1);
  //   };

  return (
    <>
      <div className="text-center">
        <h1>Count Update Program</h1>
        <h3>{count}</h3>
        <div className="flex items-center justify-center gap-2">
          {buttonarr.map((curr, index) => (
            <button key={index} onClick={() => handleClick(curr)}>
              {curr}
            </button>
          ))}
          {/* <button onClick={increaseCount}>Increase</button>
          <button onClick={resetCount}>Reset</button>
          <button onClick={decreaseCount}>Decrease</button> */}
        </div>
      </div>
    </>
  );
};
export default UpdaterFunc;
