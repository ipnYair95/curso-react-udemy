export const initialState = {
    status: 'checking', // 'checking' ,'not-authenticated', 'authenticated',
    uid: null,
    email: null,
    displayName: null,
    photoURL: null,
    errorMessage: null
};

export const authenticatedState = {
    status: 'authenticated', // 'checking' ,'not-authenticated', 'authenticated',
    uid: '123',
    email: 'correo@mail.com',
    displayName: 'doe',
    photoURL: 'https://imagen.jpg',
    errorMessage: null
};

export const notAuthenticatedState = {
    status: 'not-authenticated', // 'checking' ,'not-authenticated', 'authenticated',
    uid: null,
    email: null,
    displayName: null,
    photoURL: null,
    errorMessage: null
};

export const demoUser = {
   uid: '123',
   email: 'correo@mail.com',
   displayName: 'Demo user',
   photoURL: 'https://imagen.jpg'
};