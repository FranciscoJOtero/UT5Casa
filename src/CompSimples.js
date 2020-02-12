import React, { Component } from "react"
import Img from 'react-image'

const Inicio = () => {

    return (

    <div>
        <Img src={require('./img/balon.jpg')} className="img"/>
    </div>

    )

}

class CompSimples extends Component {

    render() {

        return (

            <div>
                <Inicio/>
            </div>
        )

    }

}

export default CompSimples