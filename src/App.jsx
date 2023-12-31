import { useState } from 'react'
import React from 'react'
import './App.css'




function App (){
  const [Points, setPoints ] = useState([])
  const [VarX, setVarX] = useState(Number)
  const [VarY, setVarY] = useState(Number)

  let PointsCordinates = []

  function GetCordinates(event){
    let x = event.clientX;
    let y = event.clientY;
    setVarX(x)
    setVarY(y)
    setPoints([...Points, {x, y}])
    
    console.log(Points)
    
  }
  console.log("VarX:",VarX)
  console.log("VarY:",VarY)
  
  
  return(
  <div className="container">
  <div style={{color: "red"}} onClick={GetCordinates}>
    <div className='Circular' style={{position:'absolute', top:VarY, left:VarX }}></div>
  </div>
  
  </div>
  )
  

    
}
export default App
