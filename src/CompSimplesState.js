import React from 'react'


const TablaCabecera = () => {

    return (

        <thead>
            <tr>
                <th> Nombre </th>
                <th> Borrar </th>
            </tr>
        </thead>

    )

}

const TablaCuerpo = props => {

    const filasDeDatos = props.datosPersonaje.map((fila,indice) => {

        return (

            <tr key={indice}>
                <td> {fila.name} </td>
                <td> <button onClick={() => props.borrarPersonaje(indice)}> Borrar </button> </td>
            </tr>

        )
        
    }
    )
    return (
        <tbody>
            { filasDeDatos }
        </tbody>
    )
}

const CompSimplesState = (props) => {

    const {datosPersonaje,borrarPersonaje} = props;
    return (

        <table>
            <TablaCabecera />
            <TablaCuerpo datosPersonaje={datosPersonaje} borrarPersonaje= {borrarPersonaje} />
        </table>

    )

}

export default CompSimplesState