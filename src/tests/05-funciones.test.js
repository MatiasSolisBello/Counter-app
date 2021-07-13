import '@testing-library/jest-dom'
import { getUser, getUsuarioActivo } from "../base/05-funciones"

describe('Pruebas en 05-funciones', () => {
    test('debe retornar obje to', () => {
        const userTest = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        } 

        const user = getUser();
        console.log(user);
        expect( user ).toEqual( userTest )
    })

    test('debe retornar un objeto con nombre', () => {
        const nombre = 'Jose';
        const userActivo = getUsuarioActivo( nombre );

        const userTest02 = {
            uid: 'ABC567',
            username: nombre
        }
        
        expect( userActivo).toEqual( userTest02 )
    })

})