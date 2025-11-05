import React, { useEffect, useState } from "react";

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



function Message(pops){
  return (
   <p> you have read <strong> {pops.count} </strong> pieces of advice</p>
  )
}

export default App;
