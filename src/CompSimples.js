import React, { Component } from "react"

const TablaCabecera = () => {

    return(

        <thead>
            <tr>
                <th> Nombre </th>
                <th> Apellidos </th>
            </tr>
        </thead>

    )

}

const TablaCuerpo = () => {

    return (

        <tbody>
            <tr>
                <td> Mª Azucena  </td>
                <td> Herrero Herranz </td>
            </tr>

            <tr>
                <td> Epifanio </td>
                <td> Otero Miguelañez </td>
            </tr>

            <tr>
                <td> Francisco Javier </td>
                <td> Otero Herrero </td>
            </tr>
                    
            <tr>
                <td> Guti </td>
                <td> Haz </td>
            </tr>
        </tbody>
        
    )

}

const TablaPie = () => {

    return (

        <tfoot>
            <tr>
                <td> FAMILIA OTERO </td>
                <td> FAMILIA HERRERO </td>
            </tr>
        </tfoot>

    )

}

class CompSimples extends Component {

    render() {

        return (

            <table>
                <TablaCabecera/>
                <TablaCuerpo/>
                <TablaPie/>
            </table>

        )

    }

}

export default CompSimples