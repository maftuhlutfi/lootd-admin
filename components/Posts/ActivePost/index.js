import Image from "next/image";
import { useEffect, useState } from "react";
import { getMultipleProductsById, getUserData } from "../../../firebase/utils";
import getIdFromPath from "../../../utils/getIdFromPath";
import Card from "../../shared/Card";
import CardTitle from "../../shared/Card/CardTitle";
import ProductItem from "./ProductItem";
import Status from "./Status";

const ActivePost = ({ activePost }) => {
    const [userData, setUserData] = useState(null)
    const [productsList, setProductsList] = useState([])

    useEffect(() => {
        if (!activePost || productsList.length) return
        getUserData(activePost, getUserData({ uid: getIdFromPath(activePost.user) }, data => setUserData(data)))
        const getProductLists = async () => {
            const res = await getMultipleProductsById(activePost.products.map(p => getIdFromPath(p)))
            setProductsList(res)
        }
        getProductLists()
    }, [activePost])

    if (!activePost) return '';

    return (
        <Card className={`shrink-0 px-0 flex-col transform min-w-[400px] w-1/3 flex`}>
            <div className="px-6">
                <CardTitle title={'OOTD Details'} />
            </div>
            <div className="relative min-h-[460px] flex-1 w-full">
                <Image src={activePost.image} layout="fill" className="flex-1 object-cover object-center" />
            </div>
            <div className="flex flex-col mt-6 px-6">
                <div className="flex items-center justify-between w-full">
                    <div className="flex items-center">
                        <Image src={userData ? userData.image : '/icons/default-user.svg'} width={36} height={36} className="object-cover object-center rounded-full" />
                        <div className="ml-3">
                            <p className="text-sm font-bold mb-1">{userData ? userData.displayName : ''}</p>
                            <p className="text-disabled text-xs">{activePost.publishedDate}</p>
                        </div>
                    </div>
                    <div className="flex flex-col items-center">
                        <Status status={activePost.status} id={activePost.id} />
                    </div>
                </div>
                <p className="text-sm text-secondary my-6 leading-relaxed">{activePost.caption}</p>
                <div>
                    <div className="text-sm font-semibold mb-4">Local Pride Products</div>
                    <div className="flex flex-col">
                        {productsList.map(p =>
                            <ProductItem key={p.id} {...p} />
                        )}
                    </div>
                </div>
            </div>
        </Card>
    );
}

export default ActivePost;