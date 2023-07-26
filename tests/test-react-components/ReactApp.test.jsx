import { render } from "@testing-library/react"
import { ReactApp } from "../../src/ReactApp.jsx"

describe('Prueba de <ReactApp />', () => {

    // test('Debe de hacer match con el snapshot', () => {

    //     const title = 'Hola, soy Noelia'
    //     const { container } = render( <ReactApp title={title}/>)
    //     // console.log(container);
    //     expect(container).toMatchSnapshot()
    // })

    test('debe de mostrar el titulo en un h1', () => {

        const title = 'Hola, soy Noelia'
        const { container, getByText, getByTestId } = render( <ReactApp title={title}/>)
        
        expect(getByText(title)).toBeTruthy()

        // const h1 = container.querySelector('h1')
        // expect(h1.innerHTML).toContain(title)

        expect(getByTestId('test-title').innerHTML).toContain(title)
    
    })
})