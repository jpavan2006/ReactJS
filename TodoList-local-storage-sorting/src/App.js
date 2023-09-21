import React , { useState,useRef ,useEffect } from 'react'
import TodoList from './TodoList'
import uuid from 'react-uuid';

const LOCAL_STORAGE_KEY = 'todoApp.todos'

function App() {

  //const [todos,setTodos]=React.useState([])

//gets from local storage
  const [todos,setTodos]=React.useState(()=>{
    if( localStorage.getItem(LOCAL_STORAGE_KEY) == null) return []
       return JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
  })

  const todoNameRef=useRef()

  ////this function is called only once when there is empty arrry and never again as empty array is only once.
  // useEffect(() => {
  //   console.log("stored item "+localStorage.getItem(LOCAL_STORAGE_KEY))
  //   const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
  //   if(storedTodos) 
  //       setTodos(todos => todos)
  //     console.log("Set storedTodos" + storedTodos.length)
  //     } ,[])

  //we can easily persist our todolist is to store in local storage.
  //the easiest way to do which are side effect are done by useEffect
  //the inner function is going to run anytime our todo array chages. 
  // the second parameter is our todolist . 
  //useEffect is just a functoin which takes another function as first param and second param as 
  //dependencies(array of propeties) of when to run first param fun.


  //whenever our todos change we want to run our first param function to save todos .
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY , JSON.stringify(todos))
  },[todos]
  )


  function toggleTodo(id){
    //in react you should never modify state varaible . make a copy before modifying it.
           const newTodos=[...todos]
           const todo =newTodos.find(todo => todo.id === id)
           //we are fidning todo that has id same as param id
           todo.complete = ! todo.complete
           newTodos.sort((a,b) => a.complete - b.complete);
           setTodos(newTodos)
  }


  function handleAddTodo(event){
    //we need to take our prev todo and add new todo and set our new todo list
    //useref hook allows up to access elements in out html 

    const name= todoNameRef.current.value
    if(name === '') return
    //console.log(name)

    //empty text box
    todoNameRef.current.value=null
    
    setTodos(prevTodos => {
    return [...prevTodos, {id: uuid(), name:name , complete:false}]
    } )

    setTodos(todos => todos.sort((a,b) => a.complete - b.complete))

  }



  function handleClearTodo(event){

    const newTodos = todos.filter(todo => !todo.complete)
    setTodos(newTodos)

  }

  return (
    <>
    <h1>Hi Pavan Jetty </h1>

    <TodoList todos={todos} toggleTodo={toggleTodo} />
    <input type ="text" ref={todoNameRef} />
    <button onClick={handleAddTodo}> Add Todo </button>
    <button onClick={handleClearTodo}> Clear Complete Todo </button>   
    <div> {todos.filter(todo => ! todo.complete).length} left to do </div>
   </>
    
  )
}

export default App;

//jsx stands for javascript xml. it allows write html in react / it allows you html in javascript.
//TodoList is a compnonent and we are rendering a component in app

//all our todos are going into todolist component.
//react maintains the state and when things change it re-renders the state for us.

//destructuring the array                  const [todos,setTodos]=useState([])
            
//we are saying we are having props todos on our TodoList and we are passing varaible todos to that