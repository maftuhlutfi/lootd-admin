import { createContext, useContext } from "react";
import useFirebaseAuth from "../hooks/useFirebaseAuth";

const authUserContext = createContext({
    authUser: null,
    loading: true,
    signInWithEmailAndPassword: async () => { },
    signOut: async () => { }
})

const AuthUserProvider = ({ children }) => {
    const auth = useFirebaseAuth()
    return (
        <authUserContext.Provider value={auth}>
            {children}
        </authUserContext.Provider>
    );
}

export default AuthUserProvider;

export const useAuth = () => useContext(authUserContext)