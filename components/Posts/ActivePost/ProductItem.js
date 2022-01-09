import Image from "next/image";
import { useEffect, useState } from "react";
import { getBrandById } from "../../../firebase/utils";

const ProductItem = ({ image, name, brand }) => {
    const [brandName, setBrandName] = useState('')

    useEffect(() => {
        const getBrandName = async () => {
            const res = await getBrandById(brand)
            setBrandName(res.name)
        }
        getBrandName()
    }, [])

    return (
        <div className="flex items-center mb-2 last:mb-0">
            <Image src={image} width={64} height={64} className="object-contain object-center rounded-[20px]" />
            <div className="ml-4">
                <p className="text-sm font-semibold mb-1">{name}</p>
                <p className="text-xs text-secondary">{brandName}</p>
            </div>
        </div>
    );
}

export default ProductItem;