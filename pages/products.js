import { useState } from 'react';
import AddEditModal from '../components/Products/AddEditModal';
import ProductItem from '../components/Products/ProductItem';
import Button from '../components/shared/Button';
import CustomHead from '../components/shared/CustomHead'
import DashboardTopMenu from '../components/shared/DashboardTopMenu'
import TextFieldWithIcon from '../components/shared/Input/TextFieldWithIcon';
import DashboardLayout from '../layout/DashboardLayout'

const productsData = [
    {
        name: 'Roughneck 1991 Jacket',
        brand: 'Roughneck',
        category: 'Jacket',
        image: '/mock-pict/product (1).jpg'
    },
    {
        name: 'Ventela 70s White',
        brand: 'Ventela',
        category: 'Footwear',
        image: '/mock-pict/product (2).jpg'
    },
    {
        name: 'Erigo Cap White',
        brand: 'Erigo',
        category: 'Hat',
        image: '/mock-pict/product (3).jpg'
    },
]

const ProductsPage = () => {
    const [showAddEditModal, setShowAddEditModal] = useState(false)
    const [activeProduct, setActiveProduct] = useState(null)

    const [searchInput, setSearchInput] = useState('')

    const handleAddNewProduct = () => {
        setShowAddEditModal(true)
        setActiveProduct(null)
    }

    const handleEditProduct = index => {
        setShowAddEditModal(true)
        setActiveProduct({ ...productsData[index], index })
    }

    const filteredProductsData = productsData.filter(b => b.name.toLowerCase().includes(searchInput.toLowerCase()))

    return (
        <>
            <CustomHead
                title='Products - LOOTD Admin'
                description='Admin dashboard for LOOTD Admin'
            />
            <DashboardLayout>
                <DashboardTopMenu title={'Products'} subTitle={'Manage Local'} />
                <div className='flex items-center justify-between w-full'>
                    <TextFieldWithIcon value={searchInput} onChange={e => setSearchInput(e.target.value)} icon={'icon-search'} placeholder='Search products' className='w-[400px]' />
                    <Button onClick={handleAddNewProduct}>Add New Product</Button>
                </div>
                <div className='grid grid-cols-4 items-start gap-6 w-full'>
                    {filteredProductsData.map((b, i) =>
                        <ProductItem key={i} onClick={() => handleEditProduct(i)} {...b} />
                    )}
                </div>
            </DashboardLayout>
            <AddEditModal show={showAddEditModal} onClose={() => setShowAddEditModal(false)} productData={activeProduct} />
        </>
    );
}

export default ProductsPage;