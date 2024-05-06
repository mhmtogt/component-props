import "./App.css";
import React from "react";
import { Card } from "./components/Card";
// propslar parentdan childa doğru gider ve propslar tek taraflıdır
function App() {
  return (
    <div>
      <h1>App</h1>
      <Card />
    </div>
  );
}

export default App;
