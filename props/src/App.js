import "./App.css";
import React from "react";
import { Card } from "./components/Card";
// propslar parentdan childa doğru gider ve propslar tek taraflıdır
function App() {
  return (
    <div>
      <h1>App</h1>
      <Card
        name="Eric"
        src="https://cdn.pixabay.com/photo/2021/01/04/07/33/man-5886719_640.jpg"
        phone="+1 4384 3439"
      />

      <Card
        name="Demian"
        src="https://cdn.pixabay.com/photo/2015/06/12/22/03/model-807555_640.jpg"
        phone="+1 44984 439"
      />

      <Card
        name="Thomas"
        src="https://cdn.pixabay.com/photo/2019/12/15/10/06/groom-4696727_640.jpg"
        phone="+49 8874 3439"
      />

      <Card
        name="Valentine"
        src="https://cdn.pixabay.com/photo/2020/10/19/09/44/woman-5667299_640.jpg"
        phone="+44 232 2843"
      />
    </div>
  );
}

export default App;
