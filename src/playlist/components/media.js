import React, { Component } from 'react'

// clase javascript extendiendo con reactJs
// podemos minificar el codigo component
// class Media extends React.Component {
    class Media extends Component {
    render() {
        return (
            <div>
                <div>
                    <img 
                    src="" 
                    alt=""
                    width={260}
                    height={160}
                    />
                    <h3>¿Por qué aprender React??</h3>
                    <p>Adrian Caminos</p>
                </div>
            </div>
        )
    }
}

export default Media
// ahora vamos a invocar el component media