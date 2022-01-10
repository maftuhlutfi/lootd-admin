import { useEffect, useState } from "react";
import { addNewProduct, editProduct, getAllBrands, getBrandById } from "../../firebase/utils";
import Button from "../shared/Button";
import ImageInput from "../shared/Input/ImageInput";
import TextField from "../shared/Input/TextField";
import Modal from "../shared/Modal";
import ModalTitle from "../shared/Modal/ModalTitle";
import Select from "../shared/Input/Select";
import Message from "../shared/Message";
import { useRouter } from "next/router";

const categoryList = ['Hat', 'Shirt', 'T-Shirt', 'Jacket', 'Cardigan', 'Pants', 'Footwear', 'Watch', 'Bag']

const AddEditModal = ({ show, productData, onClose }) => {
    const router = useRouter()
    const initialInput = {
        name: '',
        brand: '',
        category: '',
        image: null
    }

    const [input, setInput] = useState(initialInput)
    const { name, brand, category, image } = input

    const [imageData, setImageData] = useState(null)

    const [brandsData, setBrandsData] = useState([])

    const [message, setMessage] = useState(null)

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
        const brandPath = `brands/${brandsData.filter(b => b.name == brand)[0].id}`
        if (!productData) {
            addNewProduct({ ...input, brand: brandPath }).then(() => {
                setMessage({
                    type: 'success',
                    message: 'Successfully add new product'
                })
            })
        } else {
            editProduct(productData.id, { ...input, brand: brandPath }, productData.image == input.image ? null : productData.image).then(() => {
                setMessage({
                    type: 'success',
                    message: 'Successfully edit brand'
                })
            })
        }
    }

    useEffect(() => {
        if (message) {
            const timeout = setTimeout(() => {
                router.reload()
            }, 1000)
            return () => clearTimeout(timeout)
        }
    }, [message])

    useEffect(() => {
        const setBrandName = async () => {
            const res = await getBrandById(productData.brand)
            setInput(p => ({
                ...p,
                brand: res.name
            }))
        }
        if (show && productData) {
            setInput(productData)
            setImageData(productData.image)
            setBrandName()
        } else {
            setInput(initialInput)
            setImageData(null)
        }
    }, [show])

    useEffect(() => {
        const getBrandsData = async () => {
            const res = await getAllBrands()
            setBrandsData(res)
        }
        getBrandsData()
    }, [])

    return (
        <>
            <Modal show={show} onClose={onClose}>
                <ModalTitle title='Add/Edit Product' />
                <form className="flex flex-col w-full" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-2 gap-6 mb-6">
                        <ImageInput id='product-image' name='image' className='h-full w-full' image={imageData} onChange={handleChange} />
                        <div className="flex flex-col">
                            <TextField placeholder='Name' className='bg-purple-light mb-6' name='name' value={name} onChange={handleChange} required />
                            <Select id='brand' placeholder='Brand' className='bg-purple-light mb-6' name='brand' value={brand} onChange={handleChange} optionList={['Select brand', ...brandsData.map(b => b.name)]} required />
                            <Select placeholder='Category' className='bg-purple-light' name='category' value={category} onChange={handleChange} optionList={['Select category', ...categoryList]} required />
                        </div>
                    </div>
                    <Button type='primary' className={'relative mx-auto w-full'}>Save</Button>
                </form>
            </Modal>
            <Message {...message} />
        </>
    );
}

export default AddEditModal;