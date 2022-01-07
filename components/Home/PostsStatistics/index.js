import Card from "../../shared/Card";
import CardTitle from "../../shared/Card/CardTitle";
import PostChart from "./PostChart";

const PostStatistic = ({ data }) => {
    return (
        <Card>
            <CardTitle title={'This Week Posts Statistics'} />
            <PostChart data={data} />
        </Card>
    );
}

export default PostStatistic;