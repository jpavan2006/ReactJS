import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

// if you are using jsx syntax
  // if you are using reactdom for rendering.

// import Header from './Header'
// import MainComponent from './MainComponent'
// import Footer from './Footer'



/* const page = (
  <header>
  <nav className="nav">
    <img src="./logo512.png"  width="40px" />
    <ul className="nav-items"> 
      <li> Pricing </li>
      <li> Contact </li>
      <li>About Us </li> 
    </ul>
  </nav>
  </header>

) */

/* function Header(){
  return (
    <header>
  <nav className="nav">
    <img src="./logo512.png"  width="40px" />
    <ul className="navitems"> 
      <li> Pricing </li>
      <li> Contact </li>
      <li>About Us </li> 
    </ul>
  </nav>
  </header>
  )

}
 */

// function Display(){
// return (
//    <div>
//         <Header />
//         <MainComponent />    
//         <Footer />   
//    </div>
// )
// }

//react 18:
//const page=ReactDOM.createRoot(document.getElementById("root")
//page.render(<App/>

//react 17:
ReactDOM.render(<App /> , document.getElementById("root"))
