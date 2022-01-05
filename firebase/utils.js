import { doc, getDoc } from "firebase/firestore"
import { db } from "./clientApp"

export const getUserData = async (authUser, cb) => {
    const docRef = doc(db, `/users/${authUser.uid}`)
    const docSnap = await getDoc(docRef)

    await cb(docSnap.data())
}