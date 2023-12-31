import { useState } from 'react'
import React from 'react'
import './App.css'




function App (){
  const [Points, setPoints ] = useState([])

  let PointsCordinates = []

  function GetCordinates(event){
    let x = event.clientX;
    let y = event.clientY;
    setPoints([...Points, {x, y}])
    
    console.log(Points)

  }
  return(
  
  <div style={{color: "red"}} onClick={GetCordinates}>Hello World</div>
  )
    
}
export default App
