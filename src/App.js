import React, { Component } from 'react'
import Tabla from './Tabla'
import CompSimples from './CompSimples'

class App extends Component {

    render() {

        return(

            <div className="App">
                <h1> Tabla creada mediante un componente de clase que no utiliza componente simples </h1> 
                <Tabla/>

                <h1> Tabla creada mediante un componente de clase que  utiliza componentes simples </h1> 
                <CompSimples/>
            </div>

        )

    }

}

export default App