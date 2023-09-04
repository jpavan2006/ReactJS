import React from 'react'
import ReactDOM from 'react-dom'

export default function Main() {
    return (
        <>
        <h1> React has lot to offer </h1>
        <ol>
            <li>It is declarative</li>
            <li>It is composable</li>
            <li>It is reactive </li>
            <li>It works based of JSX</li>
            <li>With JSX ,we need to make sure to  only return only 1 parent element. Put more elements  in div or empty tag </li>
            <li>if jsx has 2 sibling elements , then we neeed to nest into single parent element. </li>
            <li>The job of render is to take react elements(JSX)  and covert them into real dom elements.</li>
            <li>You are able to render variables , functions which are jsx in react .JSX means  html in javascript.</li>
            <li>JSX means HTML and JavaScript together. </li>
            <li>Browser does not understand this JSX because it's not valid JavaScript code . </li>
            <li>Import react is what defines/identifies jsx and converts react elements into real dom.</li>
            <li>Any React component should begin with capital letter.</li>
            <li>Tip :  ctrl+/ will comment selectd code in visual studio. </li>
         </ol>
         </>
       
    )
}