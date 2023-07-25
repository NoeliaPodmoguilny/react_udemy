import { retornaArreglo } from "../../src/base-pruebas/07-deses-arr";

describe('Prueba de 07-deses-arr', () => { 

    test('retornaArreglo debe retornar un string y un number', () => { 

        const [letras, numeros] = retornaArreglo();

        expect(letras).toEqual(expect.any(String));
        expect(numeros).toEqual(expect.any(Number));
    })
})