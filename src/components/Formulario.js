import { useState } from "react";


function Formulario() {

    /* regla de React para variables se llaman state */

    /* se declara dos variables, con los corchetes
       la primer el valor la variable donde guarda el input
       la segunda, la funcion para asignar el valor 
       */

    const [valor, setValor] = useState("");


    const [passw, setPassw] = useState("");
   
    return (<form>
        <label>Usuario:</label>
        <input type="text" value={valor} onChange={(e) => setValor(e.target.value)} /><br />

        <label>Password:</label>
        <input type="password" value={passw} onChange={(e) => setPassw(e.target.value)} /><br />

        <label>Club de Futbol:</label>
        <input type="text" /><br />

        <label>Dirccion :</label>
        <input type="text" /><br />

        <input type="submit" value="Submit" />
    </form>);
}


export default Formulario;