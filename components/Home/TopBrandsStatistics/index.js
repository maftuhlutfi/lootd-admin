import Card from "../../shared/Card";
import CardTitle from "../../shared/Card/CardTitle";
import Legends from "./Legends";
import TopBrandsChart from "./TopBrandsChart";

const TopBrandsStatistics = ({ data }) => {
    return (
        <Card className='min-w-[400px] w-1/3 shrink-0 flex flex-col'>
            <CardTitle title={'Top 5 Brands'} className='mb-8' />
            <TopBrandsChart data={data} />
            <Legends data={data} />
        </Card>
    );
}

export default TopBrandsStatistics;