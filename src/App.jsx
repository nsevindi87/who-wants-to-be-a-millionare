import "./app.css"
import { useState, useEffect } from "react";
import { moneyPyramid } from "./moneyPyramid";
import { data } from "./questionsData";
import Trivia from './components/Trivia';
import Timer from "./components/Timer";
import Start from "./components/Start";

function App() {

  const [username, setUsername] = useState(null)
  const [questionNumber, setQuestionNumber] = useState(1)
  const [stop, setStop] = useState(false)
  const [earned, setEarned] = useState("$ 0")

  useEffect(() => {
    questionNumber > 1 && setEarned(moneyPyramid.find((m) => m.id === questionNumber - 1).amount);
  }, [moneyPyramid, questionNumber])


  return (
    <div className="app">
      {username ? (<>
        {/*//!====MAIN SECTION======= */}
        <div className="main">
          {stop ? (<h1 className="endText">You earned: {earned}</h1>)
            : (
              <>
                <div className="top">
                  <div className="timer">
                    <Timer setStop={setStop} questionNumber={questionNumber} />
                  </div>

                </div>
                <div className="bottom">
                  <Trivia
                    data={data}
                    setStop={setStop}
                    questionNumber={questionNumber}
                    setQuestionNumber={setQuestionNumber}
                  />
                </div>
              </>
            )

          }
        </div>
        {/* //!====moneyPyramid======= */}
        <div className="pyramid">
          <ul className="moneyList">
            {moneyPyramid.map((m) => (
              <li className={questionNumber === m.id ? "moneyListItem active" : "moneyListItem"}>
                <span className="moneyListItemNumber ">{m.id}</span>
                <span className="moneyListItemAmount">{m.amount}</span>
              </li>
            ))}

          </ul>
        </div>
      </>) : (
        <Start setUsername={setUsername} />
      )}


    </div>
  );
}

export default App;
