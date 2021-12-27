import Card from "../../shared/Card";
import CardTitle from "../../shared/Card/CardTitle";
import Legends from "./Legends";
import TopBrandsChart from "./TopBrandsChart";

const topBrandData = [
    {
        label: 'Ventela',
        value: 2092
    },
    {
        label: 'Roughneck 1991',
        value: 1029
    },
    {
        label: 'Erigo',
        value: 912
    },
    {
        label: 'Compass',
        value: 543
    },
    {
        label: 'Patrobas',
        value: 201
    },
]

const TopBrandsStatistics = () => {
    return (
        <Card className='w-[400px] shrink-0 flex flex-col'>
            <CardTitle title={'Top 5 Brands'} className='mb-8' />
            <TopBrandsChart data={topBrandData} />
            <Legends data={topBrandData} />
        </Card>
    );
}
 
export default TopBrandsStatistics;