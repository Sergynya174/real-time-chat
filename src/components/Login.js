import React, { useContext } from "react";
import {Grid, Container, Button, Box} from "@mui/material";
import {Context} from '../index';
import firebase from 'firebase/compat/app';

const Login = () => {
    const {auth} = useContext(Context)

    const login = async () => {
       const provider = new firebase.auth.GoogleAuthProvider()
       const {user} = await auth.signInWithPopup(provider)
    }

    return(
        <Container>
            <Grid container 
                sx={{height: window.innerHeight - 50}}
                alignItems='center'
                justifyContent='center'
            >
                <Grid container sx={{width: 400}} bgcolor='lightgray' alignItems='center' direction='column'>
                    <Box p={5}>
                        <Button variant='filled' onClick={login} >Войти с помощью Google</Button>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Login;