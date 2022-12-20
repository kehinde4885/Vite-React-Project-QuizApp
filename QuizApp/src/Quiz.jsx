import { useEffect, useState } from "react"

function getRandomNum(){
  return Math.floor(Math.random() *4)
}


function showSelectedOption(e){

  if(e.target.type){
    let buttons = Array.from(e.target.parentElement.children)

    buttons.forEach(element => {
      element.classList.remove('selected')
    });

    e.target.classList.toggle('selected')
  }
}


// Component

export default function Quiz(props){
 

  
  let trivia = props.quiz

  const [markingScheme, changeMarkScheme] = useState(getMarkScheme())
  const [isquizEnd,changeQuizState] = useState(false)
  const [questions, changeQuestions] = useState([getQuestions()])

  console.log(markingScheme)
  
  function visualEffects(form){
    form.forEach((option) =>{
    
      for (let i = 0; i < 5; i++) {

        if(option.value === markingScheme[i]){
          option.style.backgroundColor = '#94d7a2'

        }else{
          option.disabled = true
        }
        
      }

    })
  }

  function restartQuiz(e){
    e.preventDefault()
    props.startQuiz()
  }

  function getMarkScheme(){
    let correctAnswersArray = []
    trivia.forEach(function(element){
      correctAnswersArray.push(element.correctAnswer)
    })
    
    return correctAnswersArray
  }


  function checkAnswers(e){
    e.preventDefault()

   let form = Array.from(e.target.form.elements)
    
    let selected = e.target.parentElement.querySelectorAll('.selected')

    let selectedArray = []
  
    for (const value of selected){
      selectedArray.push(value.value)
    }
   
    let correct = (selectedArray.filter(function(element,index,array){
      return element === markingScheme[index]
    })).length

    changeQuizState(true)
    changeMarkScheme((oldScheme) => {
      return ( [...oldScheme , {correctAnswers : correct}])
    })

    visualEffects(form)

  }

  function getQuestions() {
    let questions = trivia.map(function(questionObject){
      const {question,incorrectAnswers,correctAnswer,id} = questionObject
      function getOptions(){
        let num = getRandomNum()

        let answers = [...incorrectAnswers]

        answers.splice(num,0,correctAnswer)

        let optionsArray = answers.map(function(element,index,array){
          //console.log(correctAnswer)

          //console.log(element,index,array)
          return (
            <input
              key={index}
              type='button'
              value={element}
              className='border-[1px] border-deepblue px-4 py-1 rounded-lg my-2 mr-2'>
            </input>
          )
        })

        // return optionsArray to getOptions() function
        return optionsArray
      }

      // return an array of JSX ELements to questions variable
      return (
        <div key={id}>
          <p className="font-bold">{question}</p>
          <div onClick={showSelectedOption}
          className='flex text-xs flex-wrap pb-2 border-b-2 border-divider'>
            {getOptions()}
          </div>
        </div>
      )
    })
  return questions

  }

  return(
    <form className='quiz font-Karla text-blue h-full flex flex-col justify-around'>
      <div className="grid grid-cols-10 content-center">
        <div className='space-y-4 col-start-2 col-span-8'>
          {questions}
        </div>
      </div>

      {isquizEnd && <div className="flex justify-around items-center">
        <p className="font-bold">You got {markingScheme[5].correctAnswers}/5 answers correct</p>
      <button onClick={restartQuiz}
      className='self-center bg-deepblue font-inter text-white px-10 py-2 rounded-2xl font-medium'>
          Play again
      </button>
      </div>}

      {!isquizEnd && <button onClick={checkAnswers}
      className='self-center bg-deepblue font-inter text-white px-14 py-4 rounded-2xl font-medium'>
          Check Answers
      </button>}
      
    </form>
  )
}

