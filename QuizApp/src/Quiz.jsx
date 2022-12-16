import { useEffect, useState } from "react"

function getRandomNum(){
  return Math.floor(Math.random() *4)
}


function showSelectedOption(e){
  console.log(e.target.parentElement)
}

// Component

export default function Quiz(props){

  let trivia = props.quiz

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
          {getQuestions()}
        </div>
      </div>
      <button 
      className='self-center bg-deepblue font-inter text-white px-14 py-4 rounded-2xl font-medium'>
          Check Answers
      </button>
    </form>
  )
}

  