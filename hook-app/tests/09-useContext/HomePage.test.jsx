import { render, screen } from "@testing-library/react";
import { HomePage } from "../../src/09-useContext/HomePage";
import { UserContext } from "../../src/09-useContext/context/UserContext";

describe('Home Page', () => {

    const user = {
        id: 1,
        name: 'Yair'
    };

    test('debe mostrar el componente sin el usuario', () => {

        render(
            <UserContext.Provider value={{ user: null }} >
                <HomePage />
            </UserContext.Provider>
        );

        const preTag = screen.getByLabelText('pre'); //aria lable
        
        expect( preTag.innerHTML ).toBe('null');

    });

    test('debe de mostrar el componnete con el usuario', () => {
        
        render(
            <UserContext.Provider value={{ user: user }} >
                <HomePage />
            </UserContext.Provider>
        );

        const preTag = screen.getByLabelText('pre'); //aria lable
        
        expect( preTag.innerHTML ).toContain(user.name);
        expect( preTag.innerHTML ).toContain(`${user.id}`);

    });

});