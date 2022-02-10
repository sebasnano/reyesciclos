import React from "react";
import "./App.css";
const Reyes = ({ reyes }) => {
  const ruta = "https://html6.es/img/rey_";

  const reyesMap = reyes.map((rey) => (
    <div key={rey.nombre} className="rey">
      <span className="color">{rey.nombre.toUpperCase()}</span> ha comido{" "}
      {rey.vacasComidas * rey.reinado * 365} vacas, en sus {rey.reinado} años de
      reinado
      <img src={ruta + rey.nombre.toLowerCase() + ".png"} alt={rey.nombre} />
    </div>
  ));

  return (
    <>
      {reyesMap}
    </>
  );
};

export default Reyes;
