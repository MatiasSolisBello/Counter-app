describe('Primera prueba', () => {
    test('los strings deben ser iguales', () => {

        //Inicio y estimulo
        const mensaje = 'Hola'
        const mensaje2 = 'Hola'

        //Observar comportamiento            
        expect( mensaje ).toBe( mensaje2 );
    })
})
