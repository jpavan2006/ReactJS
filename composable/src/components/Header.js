import React from "react"
import ReactDOM from "react-dom"

export default function Header(){

    return (
         <header>
            <nav className="nav">
            <img src="./logo512.png"  width="100px" />
            <ul className="navitems"> 
              <li>This  react page gives imformation about React </li>
              <li>It  shows a page designed in React and composed from multiple react components. </li>
               <li>First step to learning react by exploring declarative and composable nature of react</li> 
            </ul>
         </nav>
         </header>

    )
}

//export default Header
//what it means when i have to change header come and change header.js