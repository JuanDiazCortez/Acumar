import "./App.css";
import Head from "./components/Head";
import Cuerpo from "./components/Cuerpo";

function App() {
  var nivel = 12;
  var logo = "./logo192.png";

  return (
    <div className="App">
      <Head titulo="Hola React " color="blue" nivel={1} />
      <Head
        titulo="Clase II (funciones) "
        color="red"
        nivel={nivel}
        imagen={logo}
      />
      <Cuerpo  data="Datos del cuerpo" />
      
    </div>
  );
}

export default App;
