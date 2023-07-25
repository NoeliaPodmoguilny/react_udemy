import { getUser, getUsuarioActivo } from "../../src/base-pruebas/05-funciones";

describe('Prueba sobre 05-funciones', () => { 

    test('getUser debe retornar un objeto', () => { 

            const testUser = {
                uid: 'ABC123',
                username: 'El_Papi1502'
            };
            const user = getUser();

            expect(testUser).toEqual(user)

    });

    test('getUsuarioActivo debe retornar un objeto', () => { 

        const name = 'Noelia'
        const user2 = getUsuarioActivo(name);
        const testUser2 = {
            uid: 'ABC567',
            username: name
        };
        expect(testUser2).toEqual(user2)

    })





})