import StatsItem from "./StatsItem";

const statList = [
    {
        icon: 'icon-profile',
        title: 'Total Users',
        value: 100
    },
    {
        icon: 'icon-image',
        title: 'Total Posts',
        value: 10239
    },
    {
        icon: 'icon-bag',
        title: 'Total Products',
        value: 872
    },
    {
        icon: 'icon-star',
        title: 'Total Brands',
        value: 120
    },
]

const Stats = () => {
    return (
        <div className="grid grid-cols-4 gap-5">
            {statList.map((s, i) => 
                <StatsItem key={i} {...s} />
            )}
        </div>
    );
}
 
export default Stats;