import React , { useState,useRef ,useEffect } from 'react'

import uuid from 'react-uuid'
//npm i react-uuid


//npm i uuid
//uuidv4() is going to generate a random id.

export default function App(){
//const [count,setCount]=useState(0)
//this is going to render page every time state changes.


//const [count,setCount]=useState(countInitial())
const [count,setCount]=useState(0)
//this will setCount only once.

function countInitial(){
  console.log("countIntial")
  return 4
}
function decrementCount(){
  //setCount(count-1)
  setCount(prevCount=> prevCount-1)
}

function incrementCount(){
  //setCount(count+1)
  setCount(prevCount => prevCount+1)
}

   return(
    <>
      <button onClick={decrementCount}>-</button>
      <span>{count}</span>
      <button onClick={incrementCount}>+</button>
     </>
  )

}

//u can use hooks only in function component.
//the useState hooks will execute in same order.
//they has to be at top level and no if 

/* //react maintains the state for us and when ever state changes it renders the component tree .
  //to use state in a component , we need to code for useState hook. import React, {useState} from 'react'
  //pass default state when app loads first time and we can do this by passing  empty array.
  //interesting thing about usestate is it returns an array and we can destructure the array : const [todos, setTodos] 
  //this is what is called props . here we are saying we have props with name todos and we are passing it to component ToDoList
  */


  // we wil set up a onClick event listner on Aadd to do button that will call handleAddTodo function.