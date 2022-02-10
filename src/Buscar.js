import React from "react";

function Buscar({ reyes }) {
  const buscarRey = reyes.find(
    (e) => e.nombre.substring(0, 1) === "ñ" || e.nombre.substring(0, 1) === "Ñ"
  );

  return (
    <>{buscarRey == undefined ? "No se ha encontrado" : buscarRey.nombre}</>
  );
}

export default Buscar;
