import Cookies from 'js-cookie';


export const setToken = token => {
    Cookies.set('token', token, {expires: 1});
}

export const isAuthenticated = () => {
    return Cookies.get('token') !== undefined && Cookies.get('token') !== '';
}
export const isAdmin = (user) => {
    console.log(user)
    return isAuthenticated() && user.role.name === "admin";
}
export const autheticate = (token, user) => {
    localStorage.setItem("user", JSON.stringify(user));
    setToken(token);
}

export const logoutUser = () =>{
    localStorage.removeItem("user");
    Cookies.remove("token");
}

export const getUserFromLocalStorage = () => {
    const user = localStorage.getItem("user");

    if (user) {
      return JSON.parse(user);
    }

    return false;
  }

export const mergeUsers = (users) => {
    const studentsArray = users.students ? users.students : [];
    const coachesArray = users.coaches ? users.coaches : [];
    const adminsArray = users.admins ? users.admins : [];

    return [...studentsArray, ...coachesArray, ...adminsArray];
}

export const getFullName = ({firstName, lastName}) => {
    return firstName + " " + lastName;
}

export const getSchoolYearName = (schoolYear) => {
    const schoolYearNames = ['graduated', 'junior', 'senior'];
    return schoolYearNames[schoolYear] || 'invalid';
};