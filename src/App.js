import React, { Component } from "react"
import { Link, Router } from "@reach/router"
import CompSimples from "./CompSimples"
import CompSimples2 from "./CompSimples2"
import CompSimples3 from "./CompSimples3"

class App extends Component {

    render() {

        return (

            <div>
                <header className="cabeceraFlex">
                    <div className="cabeceraFlex__elem1">
                        <Link to="/Inicio"> Inicio </Link>
                    </div>

                    <div className="cabeceraFlex__elem2">
                        <Link to="/Pagina1"> Pagina 1 </Link>
                    </div>

                    <div className="cabeceraFlex__elem3">
                        <Link to="/Pagina2"> Pagina 2 </Link>
                    </div>
                </header>

                <main className="cuerpo">
                    <Router>
                        <CompSimples path="/Inicio" />
                        <CompSimples2 path="/Pagina1"/>
                        <CompSimples3 path="/Pagina2"/>
                    </Router>
                </main>
            </div>


        )

    }

}

export default App