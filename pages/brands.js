import { useState } from 'react';
import AddEditModal from '../components/Brands/AddEditModal';
import BrandItem from '../components/Brands/BrandItem';
import Button from '../components/shared/Button';
import CustomHead from '../components/shared/CustomHead'
import DashboardTopMenu from '../components/shared/DashboardTopMenu'
import TextFieldWithIcon from '../components/shared/Input/TextFieldWithIcon';
import { getAllBrands } from '../firebase/utils';
import DashboardLayout from '../layout/DashboardLayout'

const BrandsPage = ({ brands }) => {
    const [showAddEditModal, setShowAddEditModal] = useState(false)
    const [activeBrand, setActiveBrand] = useState(null)

    const [searchInput, setSearchInput] = useState('')

    const handleAddNewBrand = () => {
        setShowAddEditModal(true)
        setActiveBrand(null)
    }

    const handleEditBrand = index => {
        setShowAddEditModal(true)
        setActiveBrand({ ...brands[index], index })
    }

    if (!brands) {
        return ''
    }

    const filteredBrandsData = brands.filter(b => b.name.toLowerCase().includes(searchInput.toLowerCase()))

    return (
        <>
            <CustomHead
                title='Brands - LOOTD Admin'
                description='Admin dashboard for LOOTD Admin'
            />
            <DashboardLayout>
                <DashboardTopMenu title={'Brands'} subTitle={'Manage Local'} />
                <div className='flex items-center justify-between w-full'>
                    <TextFieldWithIcon value={searchInput} onChange={e => setSearchInput(e.target.value)} icon={'icon-search'} placeholder='Search brands' className='w-[400px]' />
                    <Button type='primary' onClick={handleAddNewBrand}>Add New Brand</Button>
                </div>
                <div className='grid grid-cols-7 items-start gap-6 w-full'>
                    {filteredBrandsData.map((b, i) =>
                        <BrandItem key={i} onClick={() => handleEditBrand(i)} {...b} />
                    )}
                </div>
            </DashboardLayout>
            <AddEditModal show={showAddEditModal} brandData={activeBrand} onClose={() => setShowAddEditModal(false)} />
        </>
    );
}

export default BrandsPage;

export async function getServerSideProps(context) {
    const brands = await getAllBrands()

    return {
        props: {
            brands
        },
    }
}