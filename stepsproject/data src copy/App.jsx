import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  const [steps, setSteps] = useState(1);

  console.log("steps", steps);
  // let step = 0;

  function handleNext() {
    if (steps == 3) return;

    // setSteps((steps) => steps + 1);
    // setSteps((steps) => steps + 1);
    setSteps(steps + 1);
  }

  function handlePrev() {
    if (steps === 1) return;
    setSteps(steps - 1);
  }

  return (
    <div className="steps">
      <div className="numbers">
        <div className={`${steps >= 1 ? "active" : ""} `}>1</div>
        <div className={`${steps >= 2 ? "active" : ""} `}>2</div>
        <div className={`${steps >= 3 ? "active" : ""} `}>3</div>
      </div>

      <p className="message">{messages[steps - 1]}</p>

      <div className="buttons">
        <button onClick={handlePrev}>Previous</button>
        <button onClick={handleNext}>Next</button>
      </div>
    </div>
  );
}

