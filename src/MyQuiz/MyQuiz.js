import {useState } from 'react';
import Quiz from '../quiz/quiz';
import style from './MyQuiz.module.css'
import questionData from '../quiz/questionData ';

function MyQuiz() {
  let [finalResult, setFinalResult] = useState(0);
  const [question, setQuestion] = useState([questionData[0]]);
  const [qnaId, setQnaId] = useState(2);
  const [check, setCheck] = useState(false);

  
  function handleNext(qid) {
    const tempQna = questionData.filter((element) => element.Flag == qid);
    setQuestion([...tempQna]);
    setQnaId(qid + 1);
   
  }

  function handleSubmit(result) {
     setFinalResult(result);
  }

  function handleSubmit1() {
    setCheck(true)
  }
  function handleRestart() {
    setQuestion([questionData[0]]);
    setQnaId(1);
    setFinalResult(0);
    setCheck(false)
  }


  return (
    <>
      <div className={style.mainDiv}>
      <h1 className={style.heading}>Quiz</h1>
        {
          question.map((x, index) => {
            return (<div key={index}>
              <Quiz key={index} Question={x.Question} Options={x.Options} cAnswer={x.Correct_Answer} Flag={x.Flag} handleSubmit={handleSubmit} />
              {(x.Flag != 10) ? <button onClick={() => handleNext(qnaId)}>Next</button> : <button onClick={handleSubmit1}>Submit</button>}
            </div>
            )
          })
        }

        {(check && ((finalResult >= 12) ? <h1>Congratulation {finalResult * 2}/20</h1> :
          <div className='result-div'>
            <h1> Congratulation {finalResult * 2}/20</h1>
            <button onClick={handleRestart} className="btn">Restart</button>
          </div>))}

      </div>
    </>
  );
}

export default MyQuiz;
