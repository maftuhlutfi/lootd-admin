import { useRouter } from 'next/router'
import { useState } from 'react'
import ActivePost from '../components/Posts/ActivePost'
import PostsFilter from '../components/Posts/PostsFilter'
import PostsList from '../components/Posts/PostsList'
import CustomHead from '../components/shared/CustomHead'
import DashboardTopMenu from '../components/shared/DashboardTopMenu'
import { getPosts } from '../firebase/utils'
import DashboardLayout from '../layout/DashboardLayout'


export default function Posts({ posts }) {
    const filter = useRouter().query.filter
    const [activePost, setActivePost] = useState(null)

    const handleActivePostChange = post => {
        setActivePost(post)
    }

    if (!posts) {
        return ''
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
                        {posts.length ?
                            <PostsList posts={posts} activePost={activePost} handleActivePostChange={handleActivePostChange} />
                            :
                            <p>There is no {filter || 'requested'} post.</p>
                        }
                    </div>
                    <ActivePost activePost={activePost} />
                </div>
            </DashboardLayout>
        </>
    )
}

export async function getServerSideProps(context) {
    const filter = context.query.filter

    const getFilter = () => {
        if (filter == 'all') return ['requested', 'accepted', 'denied']
        return filter ? [filter] : ['requested']
    }

    const posts = await getPosts(getFilter())

    return {
        props: {
            posts
        },
    }
}