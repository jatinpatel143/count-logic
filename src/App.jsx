
import { useState } from "react"

const App = () => {

const [count ,setcount] = useState(0)

const inkriment = ()=>{
  setcount(count+ 1)
  console.log(count);
  }

  const dekriment = ()=>{
   setcount(count-1)
  }
  // 
  
  // 
  return (
    <div>
      <h1 className="text-center  display-1 ">{count}</h1>
      <div className="btn btn-success my-3 w-25 rounded-0" onClick={()=>inkriment()}>incriment +</div>
      <div className="btn btn-danger w-25 rounded-0" onClick={()=>dekriment()}>dekriment -</div>
    </div>
  )
}

export default App