import React from 'react'

export default function App(){

    const [sdata , setSdata] = React.useState({})
    const [ count , setCount] =React.useState((1))
     console.log ( "rendered")

    React.useEffect(() => {
        //we can put our side effects code . it is reaching to extenral system.
        console.log ( "useeffect")
        fetch(`https://swapi.dev/api/people/${count}`)
        . then (res => res.json())
         . then(data => setSdata(data))
        
    } ,[count]) 
 // first parameter is a callback function.
 //optional second param => dependents array to determine when to to rerender.
 //this param will control when useeffect shud run.
 //it limits the number f times the effect ll run.
 //empty [] means it will mean that it ll run first time and there are no dependencies  to run it again.
 //[sdata]  means it will run when ever sdata changs.

 function getNext() {
    setCount(prevCount => prevCount +1)
 }

        return (
            <div>
               <button onClick={getNext}>  GetNext </button>
               <pre> {JSON.stringify(sdata, null, 2)} </pre>
            </div>
        )
}

//react has given us a tool useEffect to interact with outside system.
//allows us to synchronize state with outside systems.
//anything in useeffect is guarented to run only after user elements are rendered.