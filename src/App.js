// import logo from "./logo.svg";
// import "./App.css";

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React from "react"; //imr
import style from  "./css/style.module.css";
const app = () => {
  //sfc

  const name = [
    {
      name: "shubham",
      age: "20",
    },
    {
      name: "b",
      age: "22",
    },
  ];

  return (
    <div>
      <h1>header</h1>
      {/* {
        name.map((value,item)=>{
        // do some code
        return (//return result)

      })
    }
      {name.map((value,item)=>(// direct returning without any extra opration))}
      // arrow function method 1
        let functionname = (functionArguments)=>{ 
          function body  do some opration
        return something;
        }
        // method 2
        let functionName = (functionArgument)=> (functionargument+2) //directt return

      
      */}

      {name.map((value,key) => {
        return (
          <div className={style.top} key={key}>
            <h2 >{value.name}</h2>
            <h3>{value.age}</h3>
          </div>
        );
      })}

      <h1>footer</h1>
    </div>
  );
};

export default app;
