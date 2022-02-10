import React from "react";
import './App.css';
;


function FilteryDel({ reyes }) {
  const eliminar = (e) => {
    e.target.parentElement.remove();
  };
  return (
    <>
      {reyes
        .filter((rey) => !rey.nombre.includes("g"))
        .map((rey) => (
          <div key={rey.nombre}>
            {rey.nombre} <button onClick={eliminar}>X</button>
          </div>
        ))}
    </>
  );
}

export default FilteryDel;
