// create components
import React from 'react'
/* component render 
 * manera 1 de importar el reactDOM
 * import ReactDOM from 'react-dom'
*/
import { render } from 'react-dom'
import Media from './src/playlist/components/media'

const app = document.getElementById('app')

// render(que voy a renderizar, donde lo haré(app))
const holamundo = <h1>hola mundo music</h1>
render(<Media/>, app)
/*
 * Otra manera de minficiarel codigo con javascript
 * ReactDOM.render(<Media/>, app)
*/