import { useState } from 'react'




function App() {

  // let count = 15
  // const countupdate  = () => {
  //   count =count+1
  //   console.log(count);
  // }
  let [count,setcount] = useState(0)
  
  const countupdate =() =>{
    console.log("clicked button",count);
    if (count <20){
      setcount(count+1)
    }
  };

  const countreduce =() =>{
    console.log("clicked button",count);
    if (count >0){
      setcount(count-1)
    }
  };



  return (
    <>

      <h1>Value {count}</h1>
      <div className="card">
        <button onClick={countupdate}> Click Me to increase
        </button>
        <button onClick={countreduce}> Click Me to reduce
        </button>
      </div>
    </>
  )
}

export default App
