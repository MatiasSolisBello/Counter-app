import '@testing-library/jest-dom';

import { getSaludo } from "../base/02-template-string";

describe('Pruebas 02', () => {
    test('getSaludo debe retornar Hola Feña!', () => {
         const nombre = 'Feña';
         const saludo = getSaludo( nombre );
         expect( saludo ).toBe('Hola ' + nombre + '!');
    })

    test('getSaludo debe retornar Hola Carlos!', () => {
        const saludo = getSaludo();
        expect( saludo ).toBe('Hola Carlos!');
   })
    
})