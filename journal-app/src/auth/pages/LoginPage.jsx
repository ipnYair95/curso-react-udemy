import { Google } from "@mui/icons-material";
import { Alert, Button, Grid, Link, TextField, Typography } from "@mui/material";
import { Link as RouterLink } from 'react-router-dom'
import { AuthLayout } from "../layout/AuthLayout";
import { useForm } from "../../hooks";
import { useDispatch, useSelector } from "react-redux";
import { startGoogleSignIn, startLoginWithEmailAndPassword } from "../../store/auth";
import { useMemo } from "react";

const formData = {
  email: 'correo@mail.com',
  password: '123456'
}

export const LoginPage = () => {

  const { status, errorMessage } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const isAuthenticating = useMemo(() => status === 'checking', [status]);

  const { email, password, onInputChange, formState } = useForm(formData);

  const onSubmit = (event) => {

    event.preventDefault();

    dispatch(startLoginWithEmailAndPassword({ email, password }));


  }

  const onGoogleSignIn = () => {
    console.log("on google");

    dispatch(startGoogleSignIn());
  }


  return (

    <AuthLayout title="Login" >      
      <form onSubmit={onSubmit} className="animate__animated animate__fadeIn animate__faster" aria-label="submit-form" >

        <Grid container >

          <Grid item xs={12} sx={{ mt: 2 }} >
            <TextField
              label="Correo"
              type="email"
              placeholder="correo@mail.com"
              fullWidth
              name="email"
              value={email}
              onChange={onInputChange}
            />
          </Grid>

          <Grid item xs={12} sx={{ mt: 2 }} >
            <TextField
              inputProps={{
                'date-testid': 'password'
              }}
              label="Contraseña"
              type="password"
              placeholder="Contraseña"
              fullWidth
              name="password"
              value={password}
              onChange={onInputChange}
            />
          </Grid>

          <Grid container sx={{ mt: 1 }} >
            <Grid item xs={12} display={errorMessage ? '' : 'none'} >
              <Alert severity="error" > {errorMessage} </Alert>
            </Grid>
          </Grid>

          <Grid container spacing={2} sx={{ mb: 2, mt: 1 }} >

            <Grid item xs={12} sm={6} >
              <Button variant="contained" fullWidth type="submit" disabled={isAuthenticating} >
                Login
              </Button>
            </Grid>

            <Grid item xs={12} sm={6} >
              <Button aria-label="google-btn" variant="contained" fullWidth onClick={onGoogleSignIn} disabled={isAuthenticating}  >
                <Google />
                <Typography sx={{ ml: 1 }} > Google </Typography>
              </Button>
            </Grid>

          </Grid>

          <Grid container direction="row" justifyContent="end" >

            <Link component={RouterLink} color='inherit' to="/auth/register" >
              Crear una cuenta
            </Link>

          </Grid>

        </Grid>

      </form>

    </AuthLayout>

  );
};
