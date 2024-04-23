import Cookies from 'js-cookie';


export const setToken = token => {
    Cookies.set('token', token, {expires: 7});
}

export const isAuthenticated = () => {
    return Cookies.get('token') !== undefined && Cookies.get('token') !== '';
}
export const isAdmin = (user) => {
    console.log(user)
    return isAuthenticated() && user.role.name === "admin";
}

export const img = fileName  => `/src/assets/images/${fileName}`;
export const css = fileName  => `/src/assets/images/${fileName}`;

export const mergeUsers = (users) => {
    const studentsArray = users.students ? users.students : [];
    const coachesArray = users.coaches ? users.coaches : [];
    const adminsArray = users.admins ? users.admins : [];

    return [...studentsArray, ...coachesArray, ...adminsArray];
}