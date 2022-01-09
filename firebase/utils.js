import { async } from "@firebase/util"
import { collection, doc, documentId, getDoc, getDocs, limit, orderBy, query, where, updateDoc, setDoc, addDoc } from "firebase/firestore"
import { deleteObject, getDownloadURL, ref, uploadBytes, uploadBytesResumable } from "firebase/storage"
import formatPostDate from "../utils/formatPostDate"
import getIdFromPath from "../utils/getIdFromPath"
import { db, storage } from "./clientApp"

export const getUserData = async (authUser, cb) => {
    const docRef = doc(db, `/users/${authUser.uid}`)
    const docSnap = await getDoc(docRef)

    if (typeof cb == 'function') {
        await cb(docSnap.data())
    }
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
    const q = query(collection(db, 'brands'), orderBy('postsCount', 'desc'), limit(5))
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

export const getPosts = async (filter) => {
    const q = query(collection(db, 'posts'), orderBy('publishedDate', 'desc'), where('status', 'in', filter))
    const querySnapshot = await getDocs(q)

    let data = []

    querySnapshot.forEach(d => {
        data = [...data, {
            ...d.data(),
            publishedDate: formatPostDate(d.data().publishedDate.toDate()),
            user: d.data().user.path,
            products: d.data().products.map(p => p.path),
            id: d.id
        }]
    })

    return data
}

export const getMultipleProductsById = async (productsId) => {
    const q = query(collection(db, 'products'), where(documentId(), 'in', productsId))
    const querySnapshot = await getDocs(q)

    let data = []

    querySnapshot.forEach(d => {
        data = [...data, {
            ...d.data(),
            brand: getIdFromPath(d.data().brand.path),
            id: d.id
        }]
    })

    return data
}

export const getBrandById = async (brandId) => {
    const q = query(collection(db, 'brands'), where(documentId(), '==', brandId))
    const querySnapshot = await getDocs(q)

    let data = []

    querySnapshot.forEach(d => {
        data = [...data, {
            ...d.data(),
            id: d.id
        }]
    })

    return data[0]
}

export const updatePostStatus = async (id, status) => {
    const docRef = doc(db, `/posts/${id}`)
    const res = await updateDoc(docRef, { status })
    console.log(res)
}

export const getAllBrands = async () => {
    const q = query(collection(db, 'brands'))
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

export const addNewBrand = async (input) => {
    const storageRef = ref(storage, `${input.image.name}`)

    uploadBytes(storageRef, input.image)
        .then(async (res) => {
            const url = await getDownloadURL(storageRef)

            addDoc(collection(db, 'brands'), { ...input, image: url }).then(res => console.log(res))
        })
}

export const editBrand = async (id, input, oldImage) => {
    const newImageRef = ref(storage, `${input.image.name}`)

    if (oldImage) {
        uploadBytes(newImageRef, input.image)
            .then(async (res) => {
                const url = await getDownloadURL(newImageRef)

                setDoc(doc(db, `brands/${id}`), { ...input, image: url }).then(res => console.log(res))
                const oldImageRef = ref(storage, oldImage)
                deleteObject(oldImageRef).then(() => { })
            })
    } else {
        setDoc(doc(db, `brands/${id}`), input).then(res => console.log(res))
    }
}