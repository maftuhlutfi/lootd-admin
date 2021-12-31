import Image from "next/image";

const BrandItem = ({ name, image, onClick }) => {
    return (
        <div className="relative w-full rounded-2xl bg-white overflow-hidden cursor-pointer" onClick={onClick}>
            <Image src={image} width={120} height={120} layout="responsive" className="object-fit object-center" />
            <p className="p-3 text-center font-medium">{name}</p>
        </div>
    );
}

export default BrandItem;