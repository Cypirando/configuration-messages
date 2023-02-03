import React from "react";
import Button from "./components/Button";
import Stars from "./components/Stars";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button>Avansar</Button>
        <Stars>&#9733;</Stars>
      </header>
    </div>
  );
}

export default App;
