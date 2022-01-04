import Image from "next/image";

const ProductItem = ({ name, brand, image, ...otherProps }) => {
    return (
        <div className="bg-white rounded-2xl p-2 flex items-center cursor-pointer" {...otherProps}>
            <Image src={image} width={64} height={64} className="object-contain rounded-2xl" />
            <div className="ml-4">
                <p className="text-sm font-semibold mb-1 truncate">{name}</p>
                <span className="text-xs text-secondary">{brand}</span>
            </div>
        </div>
    );
}

export default ProductItem;