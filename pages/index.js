import WithAdminPage from '../components/HOC/WithAdminPage'
import PostStatistic from '../components/Home/PostsStatistics'
import RecentPosts from '../components/Home/RecentPosts'
import Stats from '../components/Home/Stats'
import TopBrandsStatistics from '../components/Home/TopBrandsStatistics'
import TopPost from '../components/Home/TopPost'
import TopProducts from '../components/Home/TopProducts'
import CustomHead from '../components/shared/CustomHead'
import DashboardTopMenu from '../components/shared/DashboardTopMenu'
import { getCounter, getPostStatistic, getRecentPosts, getTopBrandsStatisctic, getTopPost, getTopProducts } from '../firebase/utils'
import DashboardLayout from '../layout/DashboardLayout'

function Home({ statsData, topPost, postStatisticsData, topProducts, recentPosts, topBrandsStatiscticData }) {
  if (!statsData || !topPost || !postStatisticsData || !topProducts || !recentPosts || !topBrandsStatiscticData) {
    return ''
  }

  return (
    <>
      <CustomHead
        title='Dashboard - LOOTD Admin'
        description='Admin dashboard for LOOTD Admin'
      />
      <DashboardLayout>
        <DashboardTopMenu title={'Admin'} subTitle={'Welcome Back!'} />
        <div className='flex w-full'>
          <div className='w-full grid gap-10 mr-10'>
            <Stats data={statsData} />
            <PostStatistic data={postStatisticsData} />
          </div>
          <TopPost post={topPost} />
        </div>
        <div className='flex w-full items-start'>
          <div className='flex flex-col w-full mr-10'>
            <TopProducts data={topProducts} />
            <RecentPosts data={recentPosts} />
          </div>
          <TopBrandsStatistics data={topBrandsStatiscticData} />
        </div>
      </DashboardLayout>
    </>
  )
}

export default WithAdminPage(Home)

export async function getServerSideProps(context) {
  const statsData = await getCounter()
  const topPost = await getTopPost()
  const postStatisticsData = await getPostStatistic()
  const topProducts = await getTopProducts()
  const recentPosts = await getRecentPosts()
  const topBrandsStatiscticData = await getTopBrandsStatisctic()

  return {
    props: {
      statsData,
      topPost,
      postStatisticsData,
      topProducts,
      recentPosts,
      topBrandsStatiscticData
    },
  }
}