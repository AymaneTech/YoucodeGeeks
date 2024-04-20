import Cookies from 'js-cookie';
import path from "path";

export const setToken = token => {
    Cookies.set('token', token, {expires: 7});
}

export const isAuthenticated = () => {
    return Cookies.get('token') !== undefined && Cookies.get('token') !== '';
}

export const img = fileName  => `/src/assets/images/${fileName}`;
export const css = fileName  => `/src/assets/images/${fileName}`;
