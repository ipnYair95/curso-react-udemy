
describe('Prueba en demoComponent', () => {

    test('Esta prueba no debe fallar', () =>{

        // incializacion
    
        const msg1 = 'Hola mundo';
    
        // estimulo
    
        const msg2 = msg1.trim();
    
        // observar el comportamiento o expecs  
    
        expect( msg1 ).toBe( msg2 );    
    
        
    })
    
    
});



