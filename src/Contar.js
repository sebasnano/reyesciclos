import React from "react";
import "./App.css";

function Contar({ reyes }) {
  const sumar = (rey) => ++rey.target.innerHTML;
  const contador = reyes
    .filter((rey) => rey.vacasComidas > 10 && rey.reinado < 10)
    .map((rey) => (
      <div key={rey.nombre}>
        {rey.nombre}{" "}
        <div className="numero" onClick={sumar}>
          0
        </div>
      </div>
    ));
  return <>{contador}</>;
}

export default Contar;
