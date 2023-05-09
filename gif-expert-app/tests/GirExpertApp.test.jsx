import { render, screen } from "@testing-library/react";
import { GirExpertApp } from "../src/GirExpertApp";

describe('GirExpertApp', () => {

    test('should ', () => {

        render( <GirExpertApp /> );
        screen.debug();
        expect( screen ).toMatchSnapshot(); 
        
    });
    
});