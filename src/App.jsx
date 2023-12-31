import { useState } from 'react'
import React from 'react'
import './App.css'




function App (){
  const [Points, setPoints ] = useState([])
  const [VarX, setVarX] = useState()
  const [VarY, setVarY] = useState()

  

  function GetCordinates(event){
    let x = event.clientX - 10;
    let y = event.clientY - 10;

    setPoints([...Points, {x, y}])
    
    
    
  }
 console.log(Points)
  
  
  return(
  <div className="container" onClick={GetCordinates}>
    {Points.map((Point) =>{
      return(
        <div className='Circular' style={{position:'absolute', top:Point.y, left:Point.x }}></div>
      )
      
    })}
  
  
  </div>
  )
  

    
}
export default App
