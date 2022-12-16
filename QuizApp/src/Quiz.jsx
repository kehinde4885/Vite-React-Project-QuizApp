import { useEffect, useState } from "react"

function getRandomNum(){
  return Math.floor(Math.random() *4)

}



export default function Quiz(props){

let trivia = props.quiz

//console.log(trivia)


let questions  = trivia.map(function(element){

  const {question,incorrectAnswers,correctAnswer,id} = element

  let num = getRandomNum()

  let options = [...incorrectAnswers]

  options.splice(num,0,correctAnswer)

  
  let optionsArray = options.map(function(element,index,array){
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


  return (
    <div key={id}>
      <p className="font-bold">{question}</p>
      <div className='flex text-xs flex-wrap pb-2 border-b-2 border-divider'>
        {optionsArray}

      </div>
    </div>  
  )
})


    return(
      <form className='quiz font-Karla text-blue h-full flex flex-col justify-around'>
        <div className="grid grid-cols-10 content-center">
          <div className='space-y-4 col-start-2 col-span-8'>
            {questions}
          </div>
        </div>
        <button 
        className='self-center bg-deepblue font-inter text-white px-14 py-4 rounded-2xl font-medium'>
            Check Answers
        </button>
      </form>
    )
  }

  