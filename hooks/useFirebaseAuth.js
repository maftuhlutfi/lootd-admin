import { useEffect, useState } from "react";
import { auth } from "../firebase/clientApp";
import { signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { getUserData } from "../firebase/utils";

const useFirebaseAuth = () => {
    const [authUser, setAuthUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const clear = () => {
        setAuthUser(null)
        setLoading(false)
    }

    const authStateChanged = async (authState) => {
        if (!authState) {
            setAuthUser(null)
            setLoading(false)
            return
        }

        setLoading(true)

        getUserData(authState, data => {
            setAuthUser(data)
            setLoading(false)
        })
    }

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(authStateChanged)
        return () => unsubscribe()
    }, [])

    return {
        authUser,
        loading,
        signInWithEmailAndPassword: (email, password) => signInWithEmailAndPassword(auth, email, password),
        signOut: () => signOut(auth).then(clear)
    };
}

export default useFirebaseAuth;