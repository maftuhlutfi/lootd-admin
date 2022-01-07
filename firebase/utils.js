import { async } from "@firebase/util"
import { collection, doc, getDoc, getDocs, limit, orderBy, query, where } from "firebase/firestore"
import formatPostDate from "../utils/formatPostDate"
import { db } from "./clientApp"

export const getUserData = async (authUser, cb) => {
    const docRef = doc(db, `/users/${authUser.uid}`)
    const docSnap = await getDoc(docRef)

    await cb(docSnap.data())
}

export const getCounter = async () => {
    const q = query(collection(db, 'counter'))
    const querySnapshot = await getDocs(q)

    let data = []

    querySnapshot.forEach(d => {
        data = [...data, {
            ...d.data(),
            id: d.id
        }]
    })

    return data
}

export const getTopPost = async () => {
    const q = query(collection(db, 'posts'), where('status', '==', 'accepted'), orderBy('likesCount', 'desc'), limit(1))
    const querySnapshot = await getDocs(q)

    let data = []

    querySnapshot.forEach(d => {
        data = [...data, {
            ...d.data(),
            publishedDate: formatPostDate(d.data().publishedDate.toDate()),
            user: d.data().user.path,
            products: null
        }]
    })

    return data[0]
}

export const getPostStatistic = async () => {
    const dateNow = new Date()
    const dateAWeekBefore = new Date(dateNow.setDate(dateNow.getDate() - 7))
    dateAWeekBefore.setHours(0)
    dateAWeekBefore.setMinutes(0)
    dateAWeekBefore.setSeconds(0)
    const q = query(collection(db, 'posts'), where('publishedDate', '>=', dateAWeekBefore), orderBy('publishedDate', 'desc'))
    const querySnapshot = await getDocs(q)

    let data = new Array(7).fill(0)

    querySnapshot.forEach(d => {
        const date = d.data().publishedDate.toDate()
        const day = date.getDay()
        data[day] += 1
    })

    return data
}

export const getTopProducts = async () => {
    const q = query(collection(db, 'products'), orderBy('postsCount', 'desc'), limit(3))
    const querySnapshot = await getDocs(q)

    let data = []

    querySnapshot.forEach(d => {
        data = [...data, {
            ...d.data(),
            brand: null,
            id: d.id
        }]
    })

    return data
}

export const getRecentPosts = async () => {
    const q = query(collection(db, 'posts'), orderBy('publishedDate', 'desc'), limit(3))
    const querySnapshot = await getDocs(q)

    let data = []

    querySnapshot.forEach(d => {
        data = [...data, {
            ...d.data(),
            publishedDate: formatPostDate(d.data().publishedDate.toDate()),
            user: null,
            products: null,
            id: d.id
        }]
    })

    return data
}

export const getTopBrandsStatisctic = async () => {
    const q = query(collection(db, 'brands'), orderBy('postsCount', 'desc')s)
    const querySnapshot = await getDocs(q)

    let data = []

    querySnapshot.forEach(d => {
        data = [...data, {
            label: d.data().name,
            value: d.data().postsCount
        }]
    })

    return data
}