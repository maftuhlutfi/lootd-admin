import { useState } from 'react'
import ActivePost from '../components/Posts/ActivePost'
import PostsFilter from '../components/Posts/PostsFilter'
import PostsList from '../components/Posts/PostsList'
import CustomHead from '../components/shared/CustomHead'
import DashboardTopMenu from '../components/shared/DashboardTopMenu'
import DashboardLayout from '../layout/DashboardLayout'


export default function Posts() {
    const [activePost, setActivePost] = useState(null)

    const handleActivePostChange = post => {
        setActivePost(post)
    }

    return (
        <>
        <CustomHead 
            title='Posts - LOOTD Admin'
            description='Posts Data Page for LOOTD Admin'
        />
        <DashboardLayout>
            <DashboardTopMenu title={'Posts'} subTitle={'Manage User\'s'} />
            <div className='flex w-full items-start'>
                <div className='w-full grid gap-10 mr-10'>
                    <div className='flex items-center justify-end'>
                        <PostsFilter />
                    </div>
                    <PostsList activePost={activePost} handleActivePostChange={handleActivePostChange} />
                </div>
                <ActivePost activePost={activePost} />
            </div>
        </DashboardLayout>
        </>
    )
}
