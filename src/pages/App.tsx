import React from "react";
import Formulario from "../components/Formulario";
import Lista from "../components/Lista";
import './style.scss'

function App() {
  return (
    <div className="AppStyle">
      <Lista />
      <Formulario />
    </div>
  );
}

export default App;
