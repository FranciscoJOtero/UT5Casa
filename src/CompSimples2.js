import React, { Component } from "react"
import Img from 'react-image'

const Pagina1 = () => {

    return (

    <div>
        <Img src={require('./img/paisaje.jpg')} className="img"/>
    </div>

    )

}

class CompSimples2 extends Component {

    render() {

        return (

            <div>
                <Pagina1/>
            </div>
        )

    }

}

export default CompSimples2