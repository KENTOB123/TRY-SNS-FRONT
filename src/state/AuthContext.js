import { createContext, useEffect, useReducer } from "react";
import AuthReducer from "./AuthReducer";

//最初のユーザー状態を定義
const initialState = {
    user: JSON.parse(localStorage.getItem("user")) || null,
    // user: {
    //     _id:"65c19ed2a9372acd32c6050c",
    //     username:"kenbb",
    //     email:"kenbb@gmail.com",
    //     password:"abcdefgh",
    //     profilePicture: "/person/1.jpeg",
    //     followers: [],
    //     followings: [],
    //     isAdmin: false,
    //     },
        isFetcing: false,
        error: false,
};

//状態をグローバルに管理する
export const AuthContext = createContext(initialState);

export const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AuthReducer, initialState);

    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(state.user));
    },[state.user]);

    return (<AuthContext.Provider 
     value={{
        user: state.user,
        isFetcing: state.isFetcing,
        error: state.error,
        dispatch,
     }}
    >
        {children}
    </AuthContext.Provider>);
};