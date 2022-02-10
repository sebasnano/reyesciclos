import "./App.css";
/* import Contar from "./Contar";
import Buscar from "./Buscar";
import FilteryDel from "./FilteryDel"; */
import Reyes from "./Reyes";

function App() {
  const reyes = [
    {
      nombre: "Atanagildo",
      reinado: 15,
      vacasComidas: 9,
    },
    {
      nombre: "Ervigio",
      reinado: 7,
      vacasComidas: 3,
    },
    {
      nombre: "Ataúlfo",
      reinado: 5,
      vacasComidas: 16,
    },
    {
      nombre: "Leovigildo",
      reinado: 18,
      vacasComidas: 3,
    },
    {
      nombre: "Sisebuto",
      reinado: 9,
      vacasComidas: 13,
    },
    {
      nombre: "Recesvinto",
      reinado: 19,
      vacasComidas: 11,
    },
    {
      nombre: "Teodorico",
      reinado: 33,
      vacasComidas: 12,
    },
  ];

  return (
    <>
      <h1>Actividad 1:</h1>
      <div className="caja">
      <Reyes reyes={reyes} />
      </div>
      {/* <h1>Atividad2:</h1>
      <FilteryDel reyes={reyes} />
      <h1>Atividad3:</h1>
      <Buscar reyes={reyes}/>
      <h1>Actividad 4:</h1>
      <Contar reyes={reyes} />  */}
    </>
  );
}

export default App;
