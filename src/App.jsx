import "./app.css"
import { useState } from "react";
import { moneyPyramid } from "./moneyPyramid";

function App() {

  const [questionNumber, setQuestionNumber] = useState(1)

  
  return (
    <div className="app">
   {/*//!====MAIN SECTION======= */}
    <div className="main">
      <div className="top">
        <div className="timer">30</div>

      </div>
      <div className="bottom">
        question and answers
      </div>
    </div>



    {/* //!====moneyPyramid======= */}
    <div className="pyramid">
      <ul className="moneyList">
        {moneyPyramid.map((m)=>(
          <li className={questionNumber === m.id ? "moneyListItem active": "moneyListItem"}>
            <span className="moneyListItemNumber ">{m.id}</span>
            <span className="moneyListItemAmount">{m.amount}</span>
          </li>
        ))}
        
      </ul>
    </div>
    </div>
  );
}

export default App;
