import { useState } from 'react';
import AddEditModal from '../components/Brands/AddEditModal';
import BrandItem from '../components/Brands/BrandItem';
import Button from '../components/shared/Button';
import CustomHead from '../components/shared/CustomHead'
import DashboardTopMenu from '../components/shared/DashboardTopMenu'
import TextFieldWithIcon from '../components/shared/Input/TextFieldWithIcon';
import DashboardLayout from '../layout/DashboardLayout'

const brandsData = [
    {
        name: 'Roughneck 1991',
        description: 'Description from roughneck',
        location: 'Bandung - Jawa Barat',
        website: 'http://roughneck1991.com',
        instagram: 'roughneck1991',
        shopee: 'rougneck1991',
        tokopedia: 'roughneck 1991',
        image: '/mock-pict/roughneck.jpg'
    },
    {
        name: 'Ventela',
        description: 'Description from centela',
        location: 'Bandung - Jawa Barat',
        website: 'http://ventela.com',
        instagram: 'ventela',
        shopee: 'ventela',
        tokopedia: 'ventela',
        image: '/mock-pict/ventela.png'
    }
]

const BrandsPage = () => {
    const [showAddEditModal, setShowAddEditModal] = useState(false)
    const [activeBrand, setActiveBrand] = useState(null)

    const [searchInput, setSearchInput] = useState('')

    const handleAddNewBrand = () => {
        setShowAddEditModal(true)
        setActiveBrand(null)
    }

    const handleEditBrand = index => {
        setShowAddEditModal(true)
        setActiveBrand({ ...brandsData[index], index })
    }

    const filteredBrandsData = brandsData.filter(b => b.name.toLowerCase().includes(searchInput.toLowerCase()))

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
                    <Button onClick={handleAddNewBrand}>Add New Brand</Button>
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