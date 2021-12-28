import CustomHead from '../components/shared/CustomHead'
import DashboardTopMenu from '../components/shared/DashboardTopMenu'
import DashboardLayout from '../layout/DashboardLayout'

export default function Posts() {
  return (
    <>
      <CustomHead 
        title='Posts - LOOTD Admin'
        description='Posts Data Page for LOOTD Admin'
      />
      <DashboardLayout>
        <DashboardTopMenu title={'Posts'} subTitle={'Manage User\'s'} />
      </DashboardLayout>
    </>
  )
}
