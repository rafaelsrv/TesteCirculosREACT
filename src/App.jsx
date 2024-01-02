import { useState } from 'react'
import React from 'react'
import './App.css'




function App (){
  const [Points, setPoints ] = useState([])
  const [memory, setMemory] = useState()
  const [VarY, setVarY] = useState()

  

  function GetCordinates(event){
    let x = event.clientX - 10;
    let y = event.clientY - 10;

    setPoints([...Points, {x, y}])
  }
 console.log(Points)

 function unDoFunction(){
  const newPoints = [...Points]
  newPoints.pop()
  setPoints(newPoints)
  console.log('Points',Points)
  console.log("New",newPoints)
  
 }
  
  
  return(
  <div className="allContent">
    <button className="unDo" onClick={unDoFunction} style={{height:40, width:80, backgroundColor: 'red'}}>Desfazer</button>
    <button className="reDo" style={{height:40, width:80, backgroundColor:'green'}}>Refazer</button>
    
  <div className="container" onClick={GetCordinates}>
  <div className="buttons" style={{}}>
    </div>
    {Points.map((Point) =>{
      return(
        <div className='Circular' style={{position:'absolute', top:Point.y, left:Point.x }}></div>
      )
      
    })}
  
  
  </div>
  </div>
  )
  

    
}
export default App
