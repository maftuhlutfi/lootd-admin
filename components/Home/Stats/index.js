import StatsItem from "./StatsItem";

const statList = [
    {
        icon: 'icon-profile',
        title: 'Total Users',
        value: 100
    },
    {
        icon: 'icon-image',
        title: 'Total Products',
        value: 2011
    },
    {
        icon: 'icon-star',
        title: 'Total Brands',
        value: 120
    },
]

const Stats = () => {
    return (
        <div className="grid grid-cols-3 gap-5">
            {statList.map((s, i) => 
                <StatsItem key={i} {...s} />
            )}
        </div>
    );
}
 
export default Stats;