
import { usContext } from "../../src/base-pruebas/06-deses-obj";

describe('Prueba de archivo 06-deses-obj', () => { 
    test('usContext debe retornar un objeto', () => { 

        const testObj = {
            nombre: 'Sarasin',
            edad: 35,
            clave: 'Programador'
        }
        const objExpected = {
            nombreClave: testObj.clave,
            anios: testObj.edad,
            latlng: {
                lat: 14.1232,
                lng: -12.3232
            }
        }
        const obj = usContext(testObj);
        expect(obj).toEqual(objExpected)

    })
})