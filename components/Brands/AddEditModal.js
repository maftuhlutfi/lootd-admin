import { useEffect, useState } from "react";
import Button from "../shared/Button";
import TextArea from "../shared/Input/TextArea";
import TextField from "../shared/Input/TextField";
import Modal from "../shared/Modal";
import ModalTitle from "../shared/Modal/ModalTitle";

const AddEditModal = ({ show, brandData, onClose }) => {
    const initialInput = {
        name: '',
        description: '',
        location: '',
        website: '',
        instagram: '',
        shopee: '',
        tokopedia: '',
        image: ''
    }

    const [input, setInput] = useState(initialInput)
    const { name, description, location, website, instagram, shopee, tokopedia, image } = input

    const handleChange = e => {
        const { name, value } = e.target

        setInput(prev => ({
            ...prev,
            [name]: value
        }))
    }

    useEffect(() => {
        if (show && brandData) {
            setInput(brandData)
        } else {
            setInput(initialInput)
        }
    }, [show])

    return (
        <Modal show={show} onClose={onClose}>
            <ModalTitle title='Add/Edit New Brand' />
            <form className="flex flex-col w-full mb-10">
                <TextField placeholder='Name' className='bg-purple-light mb-6' name='name' value={name} onChange={handleChange} />
                <TextArea placeholder='Description' className='bg-purple-light mb-6 h-32' name='description' value={description} onChange={handleChange} />
                <TextField placeholder='Location' className='bg-purple-light mb-6' name='location' value={location} onChange={handleChange} />
                <TextField placeholder='Website' className='bg-purple-light mb-6' name='website' value={website} onChange={handleChange} />
                <div className="grid grid-cols-3 gap-6">
                    <TextField placeholder='Instagram' className='bg-purple-light' name='instagram' value={instagram} onChange={handleChange} />
                    <TextField placeholder='Shopee' className='bg-purple-light' name='shopee' value={shopee} onChange={handleChange} />
                    <TextField placeholder='Tokopedia' className='bg-purple-light' name='tokopedia' value={tokopedia} onChange={handleChange} />
                </div>
            </form>
            <Button className={'relative mx-auto w-full'}>Save</Button>
        </Modal>
    );
}

export default AddEditModal;