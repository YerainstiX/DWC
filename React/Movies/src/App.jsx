import { useState } from "react"
import "./App.css"
import Contenedor from "./components/2_03/Contenedor.jsx"
import Interprete from "./components/2_03/Interprete.jsx"
import Pelicula from "./components/2_03/Pelicula.jsx"
import Listado from "./components/3_08/Listado.jsx"
import ContadorLimite from "./components/3_08/ContadorLimite.jsx"
import ContadorLikes from "./components/3_08/ContadorLikes.jsx"
import Matricula from "./components/3_09/Matricula.jsx"
import ListaInterpretes from "./components/4_05/ListaInterpretes.jsx"
import Taquilla from "./components/4_05/Taquilla.jsx"

function App() {
    const [count, setCount] = useState(0)

    return (
        <>
            <Contenedor>
                {/*I added the new components inside movies to keep app simple*/}
                <Pelicula
                    titulo="The Lord of the Rings: The Two Towers"
                    direccion="Peter Jacson"
                    cartelera="https://m.media-amazon.com/images/M/MV5BOGFkYWJhOGQtODVlOC00OGU2LTgwM2ItZjI0M2Q3NzU5Nzk2XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
                >
                    El Señor de los Anillos: Las Dos Torres sigue la separación
                    de la Comunidad del Anillo mientras lucha contra fuerzas
                    crecientes de Sauron y Saruman. Aragorn, Legolas y Gimli
                    persiguen a los orcos que capturaron a Merry y Pippin.
                    Paralelamente, Frodo y Sam continúan su peligroso viaje
                    hacia Mordor acompañados por Gollum.
                </Pelicula>
            </Contenedor>
        </>
    )
}

export default App
