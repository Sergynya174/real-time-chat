import {LOGIN_ROUTE, CHAT_ROUTE} from './consts';
import Login from '../components/Login';
import Chat from '../components/Chat';

export const pablicRoutes = [
    {
        path: LOGIN_ROUTE,
        element: Login
    }
]

export const privateRoutes = [
    {
        path: CHAT_ROUTE,
        element: Chat
    }
]