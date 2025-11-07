import React, { useEffect, useState } from "react";
import Message from "./components/Message";


function App() {
  const [advice , setAdvice] = useState("")
  const [count , setCount]  = useState(0)

  async function getAdvice(){
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json(res);
    setAdvice(data.slip.advice)
    setCount((c)=> c + 1 )

  }

  useEffect(function(){
    getAdvice()
  },[])
  
  return (
     <div className="ui container">
     <h2>{advice}</h2>
     <button onClick={getAdvice}>Get Button</button>
     <Message count={count} />
    </div>
  );
}


export default App;
