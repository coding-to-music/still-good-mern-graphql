import Cookies from 'js-cookie';

// set Cookie
export const setCookie = (key, value) => {
    Cookies.set(key, value, { expires: 1 })
}

// get Cookie
export const getCookie = (key) => {
    return Cookies.get(key);
}

// delete Cookie
export const deleteCookie = (key) => {
    Cookies.remove(key);
}