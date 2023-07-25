
// describe es para añadir un titulo a la prueba, dentro de el mismo irá la o las pruebas, y se pueden añadir otros comentarios o desc
describe('Pruebas en <DemoComponent/>', () => { 
    
    test('esta prueba no debe fallar', () => {
        // .1 inicialización
    
        const mensaje1 = 'Hola Mundo'
    
        // .2 estimulo
        const mensaje2 = mensaje1.trim()
    
        // .3 observar el comportmiento
    
        expect(mensaje1).toBe(mensaje2)
    })

})
