import Image from "next/image";
import { useEffect, useState } from "react";
import { getBrandById } from "../../firebase/utils";

const ProductItem = ({ name, brand, image, postsCount, postCount, ...otherProps }) => {
    const [brandName, setBrandName] = useState('')

    useEffect(() => {
        (async () => {
            const res = await getBrandById(brand)
            setBrandName(res.name)
        })()
    }, [])

    return (
        <div className="bg-white rounded-2xl p-2 flex items-center cursor-pointer w-full" {...otherProps}>
            <div className="shrink-0">
                <Image src={image} width={64} height={64} className="object-contain rounded-2xl shrink-0" />
            </div>
            <div className="ml-4 shrink truncate">
                <p className="text-sm font-semibold mb-1">{name}</p>
                <span className="text-xs text-secondary">{brandName}</span>
            </div>
        </div>
    );
}

export default ProductItem;