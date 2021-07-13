/*import { getHeroeByIdAsync } from "../base/09-promesas";

describe('Pruebas con promesas', ( done ) => {
    test('debe retornar un heroe sync', () => {
        const id = 1;
        getHeroeByIdAsync( id ).then(heroe=> {
            expect( heroe ).toBe( heroes[0] );
            done();
        })
    });

    test('debe obtener un error si id no existe', (done) => {
        const id = 10;
        getHeroeByIdAsync(id).catch(error => {
            expect(error).toBe('Heroe no encontrado');
            done();
        })
    })
    
})