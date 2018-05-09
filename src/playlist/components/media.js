import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './media.css'

// clase javascript extendiendo con reactJs
// podemos minificar el codigo component
// class Media extends React.Component {
class Media extends Component {
    // Ecmascript 7 mas sencillo de declarar
    state = {
        author: 'Adrian caminos'
    }
    /* Ecmascript 6
     * constructor(props) {
     *  super(props)
     *  Enlazar con mi clase pero es muy tedioso
     *  this.handleClick = this.handleClick.bind(this)
    } */

    /* Utilizando states en vez de props
    constructor(props) {
        super(props)
        this.state = {
            author: props.author
        } 
    } */
    // arrow functions automatizamos 
    handleClick = (event) => {
       // console.log(this.props.image)
       // Cambiar el estado de un autor con setState
       this.setState({
           author: 'Ricardo celis'
       })
    }
    render() {
        // atributos de styles de html y de JSX
        const styles = {
            container: {
                fontSize: 14,
                color: '#44546b',
                cursor: 'pointer',
                width: 260,
                border: '1px solid red'
            }
        }
        return (
            // className para invocar los styles del css media.css
            <div className="Media" onClick={this.handleClick}>
                <div className="Media-cover">
                    <img
                    className="Media-image" 
                    src={ this.props.image }
                    alt=""
                    width={260}
                    height={160}
                    />
                    <h3 className="Media-title">{ this.props.title }</h3>
                    <p className="Media-autor">{ this.state.author} </p>
                </div>
            </div>
        )
    }
}
// propTypes para validar las variables si llega audio o video
Media.propTypes = {
    image: PropTypes.string,
    title: PropTypes.string.isRequired,
    author: PropTypes.string,
    // que seleccione que sea video o audio
    type: PropTypes.oneOf(['video','audio'])
}

export default Media
// ahora vamos a invocar el component media