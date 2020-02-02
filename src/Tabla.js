import React, { Component } from 'react'

class Tabla extends Component {

    render () {

        return(

            <table>
                <thead>
                    <tr>
                        <th> Nombre </th>
                        <th> Apellidos </th>
                    </tr>
                </thead>
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
                <tfoot>
                    <tr>
                        <td> FAMILIA OTERO </td>
                        <td> FAMILIA HERRERO </td>
                    </tr>
                </tfoot>
            </table>

        )

    }

}

export default Tabla