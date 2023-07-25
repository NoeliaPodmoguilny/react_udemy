import { render } from "@testing-library/react"
import { ReactApp } from "../../src/ReactApp.jsx"

describe('Prueba de <ReactApp />', () => {

    test('Debe de hacer match con el snapshot', () => {

        const title = 'Hola, soy Noelia'
        render( <ReactApp title={title}/>)
    })
})