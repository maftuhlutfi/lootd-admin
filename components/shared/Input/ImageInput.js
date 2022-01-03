import Image from "next/image";

const ImageInput = ({ image, className, id, ...otherProps }) => {
    return (
        <>
            <label htmlFor={id} className={`relative flex items-center justify-center bg-purple-light rounded-2xl overflow-hidden ${image ? 'border-2 border-disabled' : ''} ${className}`}>
                {image && <Image src={image} layout="fill" className="object-contain object-center" />}
                {!image && <i className="icon-image text-4xl text-transparent bg-clip-text bg-linear-primary" />}
            </label>
            <input id={id} type='file' accept="image/*" className="hidden" {...otherProps} />
        </>
    );
}

export default ImageInput;