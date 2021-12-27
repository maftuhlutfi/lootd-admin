import PostStatistic from '../components/Home/PostsStatistics'
import RecentPosts from '../components/Home/RecentPosts'
import Stats from '../components/Home/Stats'
import TopBrandsStatistics from '../components/Home/TopBrandsStatistics'
import TopPost from '../components/Home/TopPost'
import TopProducts from '../components/Home/TopProducts'
import CustomHead from '../components/shared/CustomHead'
import DashboardTopMenu from '../components/shared/DashboardTopMenu'
import DashboardLayout from '../layout/DashboardLayout'

export default function Home() {
  return (
    <>
      <CustomHead 
        title='Dashboard - LOOTD Admin'
        description='Admin dashboard for LOOTD Admin'
      />
      <DashboardLayout>
        <DashboardTopMenu title={'Admin'} subTitle={'Selamat Datang,'} />
        <div className='flex w-full'>
          <div className='w-full grid gap-10 mr-10'>
            <Stats />
            <PostStatistic />
          </div>
          <TopPost />
        </div>
        <div className='flex w-full items-start'>
          <div className='flex flex-col w-full mr-10'>
            <TopProducts />
            <RecentPosts />
          </div>
          <TopBrandsStatistics />
        </div>
      </DashboardLayout>
    </>
  )
}
