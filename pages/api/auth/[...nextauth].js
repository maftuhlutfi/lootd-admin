import { FirebaseAdapter } from "@next-auth/firebase-adapter"
import NextAuth from "next-auth/next"
import { firestore } from "../../../firebase/clientApp"

export default NextAuth({
    adapter: FirebaseAdapter(firestore)
})