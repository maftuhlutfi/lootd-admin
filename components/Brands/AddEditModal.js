import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { addNewBrand, editBrand } from "../../firebase/utils";
import Button from "../shared/Button";
import ImageInput from "../shared/Input/ImageInput";
import TextArea from "../shared/Input/TextArea";
import TextField from "../shared/Input/TextField";
import Message from "../shared/Message";
import Modal from "../shared/Modal";
import ModalTitle from "../shared/Modal/ModalTitle";

const AddEditModal = ({ show, brandData, onClose }) => {
    const router = useRouter()

    const initialInput = {
        name: '',
        description: '',
        location: '',
        website: '',
        instagram: '',
        shopee: '',
        tokopedia: '',
        image: null
    }

    const [input, setInput] = useState(initialInput)
    const { name, description, location, website, instagram, shopee, tokopedia, image } = input

    const [imageData, setImageData] = useState(null)

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

    const handleSubmit = async e => {
        e.preventDefault()
        if (!brandData) {
            addNewBrand(input).then(() => {
                setMessage({
                    type: 'success',
                    message: 'Successfully add new brand'
                })
            })
        } else {
            editBrand(brandData.id, input, brandData.image == input.image ? null : brandData.image).then(() => {
                setMessage({
                    type: 'success',
                    message: 'Successfully edit brand'
                })
            })
        }
    }

    useEffect(() => {
        if (show && brandData) {
            setInput(brandData)
            setImageData(brandData.image)
        } else {
            setInput(initialInput)
            setImageData(null)
        }
    }, [show])

    useEffect(() => {
        if (message) {
            const timeout = setTimeout(() => {
                router.reload()
            }, 1000)
            return () => clearTimeout(timeout)
        }
    })

    return (
        <>
            <Modal show={show} onClose={onClose}>
                <ModalTitle title='Add/Edit New Brand' />
                <form className="flex flex-col w-full" onSubmit={handleSubmit}>
                    <TextField placeholder='Name' className='bg-purple-light mb-6' name='name' value={name} onChange={handleChange} required />
                    <TextArea placeholder='Description' className='bg-purple-light mb-6 h-32' name='description' value={description} onChange={handleChange} required />
                    <TextField placeholder='Location' className='bg-purple-light mb-6' name='location' value={location} onChange={handleChange} required />
                    <div className="grid grid-cols-3 gap-6 mb-10">
                        <TextField placeholder='Website' className='bg-purple-light' name='website' value={website} onChange={handleChange} required />
                        <TextField placeholder='Instagram' className='bg-purple-light' name='instagram' value={instagram} onChange={handleChange} required />
                        <ImageInput id='brand-image' name='image' className='h-full w-full row-span-2' image={imageData} onChange={handleChange} />
                        <TextField placeholder='Shopee' className='bg-purple-light' name='shopee' value={shopee} onChange={handleChange} required />
                        <TextField placeholder='Tokopedia' className='bg-purple-light' name='tokopedia' value={tokopedia} onChange={handleChange} required />
                    </div>
                    <Button className={'relative mx-auto w-full'}>Save</Button>
                </form>
            </Modal>
            <Message {...message} />
        </>
    );
}

export default AddEditModal;