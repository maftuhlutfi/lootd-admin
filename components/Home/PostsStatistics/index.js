import Card from "../../shared/Card";
import CardTitle from "../../shared/Card/CardTitle";
import PostChart from "./PostChart";

const PostStatistic = () => {
    return (
        <Card>
            <CardTitle title={'OOTD Posts Statistics'} />
            <PostChart />
        </Card>
    );
}
 
export default PostStatistic;