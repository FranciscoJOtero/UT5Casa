import React, { Component } from 'react'
import Tabla from './Tabla'
import CompSimples from './CompSimples'
import CompSimplesProps from './CompSimplesProps'
import CompSimplesState from './CompSimplesState'

class App extends Component {

    /* Objeto para utilizar en state */

    state = {

        personajes: [

            {
                name: 'Payton Hobart',
            },

            {
                name: 'Wendy Carr',
            },

            {
                name: 'Mina',
            },

            {
                name: 'Jonathan Harker',
            },

            {
                name: 'Drácula',
            },

            {
                name: 'Once',
            },

            {
                name: 'Jim Hopper',
            },

        ]

    }

    /* Método para borrar los personajes */

    borrarPersonaje = indice => {

        const { personajes } = this.state;

        this.setState({
            personajes: personajes.filter((personaje, i) => {

                return i !== indice;

            })
        });
    }

    render() {

        /* Para utilizar en state */

        const {personajes} = this.state

        const actoresactrices = [

            {
                nombre: 'Joel',
                apellidos: 'Edgerton',
            },

            {
                nombre: 'Carmen',
                apellidos: 'Maura',
            },

            {
                nombre: 'Luis',
                apellidos: 'Tosar',
            },

            {
                nombre: 'Chloe',
                apellidos: 'Grace Morezt',
            },
        ]

        return(

            <div className="App">
                <h1> Tabla creada mediante un componente de clase que no utiliza componente simples </h1> 
                <Tabla/>

                <h1> Tabla creada mediante un componente de clase que  utiliza componentes simples </h1> 
                <CompSimples/>

                <h1> Tabla creada mediante un componente de clase que  utiliza paso de parámetros con props </h1> 
                <CompSimplesProps datosActoresActrices = { actoresactrices }/>

                <h1>Tabla creada con un componente simple (con state y que permite eliminar elementos) que utiliza dos componentes simples</h1> 
                <CompSimplesState datosPersonaje={personajes} borrarPersonaje={this.borrarPersonaje} />
            </div>

        )

    }

}

export default App