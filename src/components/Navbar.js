import React, {useContext} from "react";
import {Grid, Button, Toolbar, AppBar} from "@mui/material";
import {LOGIN_ROUTE} from '../utils/consts';
import {NavLink} from "react-router-dom";
import {useAuthState} from 'react-firebase-hooks/auth';
import {Context} from '../index';

const Navbar = () => {

  const {auth} = useContext(Context);
  const [user] = useAuthState(auth);

  return (
    <AppBar position="static">
      <Toolbar>
        <Grid container justifyContent="flex-end">
          {user ? (
            <Button onClick={() => auth.signOut()} variant="filled" color="error">Go out</Button>
          ) : (
            <NavLink to={LOGIN_ROUTE}>
                <Button variant="filled" color="success">Login</Button>
            </NavLink>
          )}
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
