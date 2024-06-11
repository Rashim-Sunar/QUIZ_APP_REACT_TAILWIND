import React, { useEffect, useState } from 'react'

const Quiz = () => {
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState({});
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [loading, setLoading] = useState(false);
  const [timer, setTimer] = useState(60);
  const [timerIntervalId, setTimerIntervalId] = useState('');
  const [status, setStatus] = useState("");

  useEffect(()=>{
    fetch("./quiz.json").then(res=>res.json()).then(data=>{
      // console.log(data);
      setQuestions(data);
    });

    const intervalId = setInterval(()=>{
      setTimer(prevTimer => prevTimer - 1);
    },1000);

    setTimerIntervalId(intervalId);

    return ()=>{
      clearInterval(intervalId);
      if(timer === 0){
        alert("Time is out");
      }
    }
  },[timer]);

  const handleAnswerSelect = (questionId, selectedOption) =>{
    // console.log(questionId, selectedOption);
    let addAnswer = {...answers, [questionId]: selectedOption};
    setAnswers(addAnswer);
  }

  const handleSubmit = () => {
    window.scrollTo({top: 0, behaviour: "smooth"}); //scroll to top
    setLoading(true);

    clearInterval(timerIntervalId);
    setTimeout(()=>{
      const quizScore = calculateScore(answers);
      setScore(quizScore);
      const percentage = quizScore / questions.length;
      const newStatus = percentage >= 50 ? "Passed":"Failed";
      setStatus(newStatus);
      setShowResult(true);
      setLoading(false);
    },5000);

  }

  const calculateScore = (userAnswer) => {
    const correctAnswers = questions.map(question => question.correct_answer);
    let score = 0;
    for(const questionId in userAnswer){ 
       if(userAnswer[questionId] === correctAnswers[questionId - 1])
        score++;
    }
    return score;
  }

  return (
    <section>
      <div className='w-[90%] md:w-9/12 mx-auto flex'>

        <div className='w-full md:w-[70%] mb-8'>
          {questions.map((question, index)=>(
            <div key={question.quiz_id} className='m-3 border border-gray-200
             py-3 px-4 shadow-sm rounded'>

              {/* Question section  */}
              <p className='flex items-center jsutify-center p-2 cursor-pointer rounded text-sm'>
                <span className='bg-primary h-8 w-8 rounded-full flex items-center justify-center 
                  mr-3 text-green-900'>
                  {index+1} 
                </span>
                <span className='text-base block'>{question.question}</span>
              </p>

                {/* Options section */}
                <div className='grid grid-col-1 sm:grid-cols-2 gap-4 mt-5'>
                    {question.options.map((option, index)=>(
                      <div key={index} onClick={()=>handleAnswerSelect(question.quiz_id, option)} 
                      className={`border border-gray-200 cursor-pointer rounded p-2 text-md 
                        ${answers[question.quiz_id] === option ?
                        "bg-gray-300":""}`}>
                        <p className='text-[12px] mb-1'>Option {index+1}</p>
                        <p>
                          {option}
                        </p>
                      </div>
                    ))}
                </div>

            </div>
          ))}

          <div className='flex items-center justify-center my-8'>
          <button className='mx-3 px-4 py-1 text-[20px] text-white bg-primary rounded-md
          hover:bg-yellow-700 transition-all duration-300 ease-out hover:scale-105' onClick={handleSubmit}>
            Submit
          </button>
          </div>
         
        </div>

        {/* Show score  */}
        <div className='md:w-[30%] w-full p-4'>
          {showResult && (
            <div>
              <h3 className='text-2xl font-medium'>Your score: {score}</h3>
              <div>
                <h3 className={`text-xs ${status === "Passed" ? "text-green-800" : "text-red-500"}`}>{status}</h3>
              </div>
            </div>
          )}
        </div>

      </div>
    </section>
  )
}

export default Quiz
