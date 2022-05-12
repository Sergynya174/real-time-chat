import React, {useContext} from "react";
import { Route, Routes } from "react-router-dom";
import {CHAT_ROUTE, LOGIN_ROUTE} from '../utils/consts';
import {pablicRoutes, privateRoutes} from '../utils/routes';
import {useAuthState} from 'react-firebase-hooks/auth';
import {Context} from '../index';
import Chat from "./Chat";
import Login from "./Login";

const AppRouter = () => {
    const {auth} = useContext(Context);
    const [user] = useAuthState(auth);
    return user ? 
    (
        <Routes path={CHAT_ROUTE}>
            {privateRoutes.map(({path, Component}) => 
                <Route key={path} path={CHAT_ROUTE} element={<Chat />} exact={true} />
            )}
        </Routes>
    ) : (
        <Routes path={LOGIN_ROUTE}>
            {pablicRoutes.map(({path, Component}) => 
                <Route key={path} path={LOGIN_ROUTE} element={<Login />} exact={true} />
            )}
        </Routes>
    )
}

export default AppRouter;