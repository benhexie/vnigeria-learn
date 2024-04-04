export const setUser = (user: Object) => {
    return {
        type: "SET_USER",
        payload: user,
    };
}