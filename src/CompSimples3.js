import React, { Component } from "react"
import Img from 'react-image'

const Pagina2 = () => {

    return (

    <div>
        <Img src={require('./img/che.jpg')} className="img"/>
    </div>

    )

}

class CompSimples3 extends Component {

    render() {

        return (

            <div>
                <Pagina2/>
            </div>
        )

    }

}

export default CompSimples3