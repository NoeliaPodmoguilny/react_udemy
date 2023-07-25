import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp.js";
import heroes  from "../../src/data/heroes.js";

describe('prueba de 08-imp-exp', () => { 

    // test('getHeroeId debe retornar un heroe por ID ', () => {

    //     const id = 1;
    //     const hero = getHeroeById(id);
    //     expect(hero).toEqual({ id: 1, name: 'Batman', owner: 'DC'})

    // })

    // test('getHeroeId debe retornar un undefined si no existe el id ', () => {

    //     const id = 100;
    //     const hero = getHeroeById(id);
    //     expect(hero).toBeFalsy();
        
    // })
    test('getHeroeId debe retornar 3 heroes de DC ', () => {

        const owner = 'DC';
        const heroesDC = getHeroesByOwner(owner);
        console.log(heroesDC)

        expect(heroesDC.length).toBe(3)
        // const heroesExpected = [
        //     { id: 1, name: 'Batman', owner: 'DC' },
        //     { id: 3, name: 'Superman', owner: 'DC' },
        //     { id: 4, name: 'Flash', owner: 'DC' }
        // ]
        // expect(heroesDC).toEqual(heroesExpected)

        //o tambien puedo usar la misma fn filter para filtrar los heroes por owner
        expect(heroesDC).toEqual(heroes.filter( (heroe) => heroe.owner === owner ))


    })

    test('getHeroeId debe retornar 2 heroes de Marvel ', () => {

        const owner = 'Marvel';
        const heroMarvel = getHeroesByOwner(owner);
        
        expect(heroMarvel.length).toBe(2);
        // console.log(heroMarvel)

        expect(heroMarvel).toEqual(heroes.filter( (heroe) => heroe.owner === owner ))
        
    })

})