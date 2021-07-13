import { getHeroeById, getHeroesByOwner } from "../base/08-imp-exp";
import heroes from '../data/heroes'

describe('Pruebas en Heroes', () => {
    test('Debe retornar un heroe', () => {
        const id = 1;
        const heroe = getHeroeById(id);

        const heroeData = heroes.find( 
            h => h.id 
        );

        expect( heroe ).toEqual( heroeData );
    });

    test('Debe retornar undefoned si heroe no existe', () => {
        const id = 10;
        const heroe = getHeroeById(id);

        expect( heroe ).toBe( undefined );
    });

    test('debe retornar arreglo con heroes de Dc', () => {
        const owner = 'DC';
        const heroeOwner = getHeroesByOwner(owner);

        const heroeData = heroes.filter( 
            h => h.owner === owner
        );

        expect( heroeOwner ).toEqual( heroeData );

    })

    test('debe retornar arreglo con heroes de Marvel', () => {
        const owner = 'Marvel';
        const heroeOwner = getHeroesByOwner(owner);
        const HeroesTest = heroes.filter(
            heroe => heroe.owner === owner
        );

        expect( heroeOwner.lenght ).toBe( HeroesTest.lenght );

    })
    
    
})