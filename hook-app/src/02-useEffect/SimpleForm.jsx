import { useEffect, useState } from "react"
import { Message } from "./Message";

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        username: 'Yair',
        email: 'correo@mail.com'
    });

    const { username, email } = formState;

    const onInputChange = ({target}) =>{

        const { name, value } = target;

        setFormState({
            ...formState,
            [name]: value
        });

    };

    useEffect(() => {
        //console.log("use effect one time");
    }, [])
    

    useEffect(() => {
        //console.log("use effect when form changed");
    }, [formState])
    
    useEffect(() => {
        //console.log("use effect when email changed");
    }, [email])

    
    

    return (
        <>
            <h1> Simple Form </h1>
            <hr />

            <input
                className="form-control"
                type="text" placeholder="Username"
                name="username"
                value={username}
                onChange={onInputChange}
            />

            <input
                className="form-control mt-2"
                type="email" placeholder="correo@mail.com"
                name="email"
                value={email}
                onChange={onInputChange}
            />

            {
                (username === 'Yair2') && <Message />
            }

        </>
    )
}
