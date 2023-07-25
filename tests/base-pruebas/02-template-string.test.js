import { getSaludo } from "../../src/base-pruebas/02-template-string.js";


describe('Pruebas en el archivo 02-template-string', () => { 
    
    test('getSaludo debe retornar "Hola Noelia"', () => { 

        const name = 'Noelia'
        const message = getSaludo(name)

        expect(message).toBe(`Hola ${name}`)

    })
})