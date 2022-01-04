import { useEffect, useState } from "react";
import Button from "../shared/Button";
import ImageInput from "../shared/Input/ImageInput";
import TextField from "../shared/Input/TextField";
import Modal from "../shared/Modal";
import ModalTitle from "../shared/Modal/ModalTitle";

const AddEditModal = ({ show, productData, onClose }) => {
    const initialInput = {
        name: '',
        brand: '',
        category: '',
        image: null
    }

    const [input, setInput] = useState(initialInput)
    const { name, brand, category, image } = input

    const [imageData, setImageData] = useState(null)

    const handleChange = e => {
        const { name, value, files } = e.target

        if (files) {
            setInput(prev => ({
                ...prev,
                image: files[0]
            }))
            setImageData(URL.createObjectURL(files[0]))
            return
        }

        setInput(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSubmit = e => {
        e.preventDefault()
    }

    useEffect(() => {
        if (show && productData) {
            setInput(productData)
            setImageData(productData.image)
        } else {
            setInput(initialInput)
            setImageData(null)
        }
    }, [show])

    return (
        <Modal show={show} onClose={onClose}>
            <ModalTitle title='Add/Edit Product' />
            <form className="flex flex-col w-full" onSubmit={handleSubmit}>
                <div className="grid grid-cols-2 gap-6 mb-6">
                    <ImageInput id='product-image' name='image' className='h-full w-full' image={imageData} onChange={handleChange} required />
                    <div className="flex flex-col">
                        <TextField placeholder='Name' className='bg-purple-light mb-6' name='name' value={name} onChange={handleChange} required />
                        <TextField placeholder='Brand' className='bg-purple-light mb-6' name='brand' value={brand} onChange={handleChange} required />
                        <TextField placeholder='Category' className='bg-purple-light' name='category' value={category} onChange={handleChange} required />
                    </div>
                </div>
                <Button className={'relative mx-auto w-full'}>Save</Button>
            </form>
        </Modal>
    );
}

export default AddEditModal;