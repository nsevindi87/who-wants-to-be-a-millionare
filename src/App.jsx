import "./app.css"
import { useState } from "react";
import { moneyPyramid } from "./moneyPyramid";
import { data } from "./quuestionData";
import Trivia from './components/Trivia';

function App() {

  const [questionNumber, setQuestionNumber] = useState(1)
  const [timeOut, setTimeOut] = useState(false)

  
  return (
    <div className="app">
   {/*//!====MAIN SECTION======= */}
    <div className="main">
      <div className="top">
        <div className="timer">30</div>

      </div>
      <div className="bottom">
        <Trivia
        data={data}
        setTimeOut={setTimeOut}
        questionNumber={questionNumber}
        setQuestionNumber={setQuestionNumber}
        />
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
