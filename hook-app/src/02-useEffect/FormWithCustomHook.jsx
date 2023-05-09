import { useForm } from "../hooks/useForm";

export const FormWithCustomHook = () => {

    const { formState, onInputChange, onResetForm, username, email, password } = useForm({
        username: '',
        email: '',
        password: ''
    });

    //const { username, email, password } = formState;

    return (
        <>
            <h1> Form With Custom Hook </h1>
            <hr />

            <input
                className="form-control"
                type="text"
                placeholder="Username"
                name="username"
                value={username}
                onChange={onInputChange}
            />

            <input
                className="form-control mt-2"
                type="email"
                placeholder="correo@mail.com"
                name="email"
                value={email}
                onChange={onInputChange}
            />


            <input
                className="form-control mt-2"
                type="password"
                placeholder="Contraseña"
                name="password"
                value={password}
                onChange={onInputChange}
            />


            <button className="btn btn-primary mt-2" onClick={onResetForm} > Borrar </button>

        </>
    )
}
