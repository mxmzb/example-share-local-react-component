import React from 'react';
import Child from 'example-child-component';
import './App.css';

console.log("Child", Child)

function App() {
  return (
    <div>
      <div className="App">
        foo
      </div>
      <Child />
    </div>
    
  );
}

export default App;
