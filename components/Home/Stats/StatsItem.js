import Card from "../../shared/Card";

const StatsItem = ({icon, title, value}) => {
    return (
        <Card>
            <i className={`${icon} text-3xl text-transparent bg-clip-text bg-linear-primary`} />
            <p className="text-sm text-disabled font-medium my-2">{title}</p>
            <h5 className="font-bold text-lg">{value}</h5>
        </Card>
    );
}
 
export default StatsItem;