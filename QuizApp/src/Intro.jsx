import React from 'react'

// Component
export default function Intro(props){

    function loadQuiz(){
      props.handleClick()
    }
  
    return (
      <div className='grid items-center h-full justify-center'>
        <div>
          <h1 className='text-[2rem] font-Karla font-semibold text-center text-blue'>
            Quizzical
            </h1>
          <button onClick={loadQuiz} className='
          bg-deepblue font-inter text-white px-14 py-4 rounded-2xl font-medium'>
            Start quiz
          </button>
        </div>
      </div>
    )
  }