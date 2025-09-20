import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
  "Celebrate your success 🎉",
];

export default function App() {
  const [steps, setSteps] = useState(1);
  const [isHidden, setHidden] = useState(true);

  
  function nextButton(){
    if(steps==4) return;
    setSteps(steps+1)
  }
  function prevButton(){
    if(steps===1) return;
    setSteps(steps-1)
  }
  

  return (
    <div>
      {isHidden && (
        <div className="steps">
          <div className="numbers">
            <div className={`${steps >= 1 ? "active" : ""}`}>1</div>
            <div className={`${steps >= 2 ? "active" : ""}`}>2</div>
            <div className={`${steps >= 3 ? "active" : ""}`}>3</div>
            <div className={`${steps >= 4 ? "active" : ""}`}>4</div>
          </div>

          <p className="message">{messages[steps - 1]}</p>

          <div className="buttons">
            <button onClick={prevButton}>Previous</button>
            <button onClick={nextButton}>Next</button>
          </div>
        </div>
      )}

      <div className="close">
        <div className="buttons">
          <button className="button" onClick={() => setHidden(!isHidden)}>
            {isHidden ? "Close" : "Open"}
          </button>
        </div>
      </div>
    </div>
  );
}