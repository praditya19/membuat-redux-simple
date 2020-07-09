import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Counter from './Components/Counter'
import Home from './Components/Home';
function App() {
  return (
    <div >
      <Home />
      <div style={{ marginLeft: 50 }}>
        <Counter />
      </div>

    </div>
  );
}

export default App;
