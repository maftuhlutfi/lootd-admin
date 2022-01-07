import StatsItem from "./StatsItem";

const statList = {
    users: {
        icon: 'icon-profile',
        title: 'Total Users'
    },
    posts: {
        icon: 'icon-image',
        title: 'Total Posts'
    },
    brands: {
        icon: 'icon-star',
        title: 'Total Brands'
    },
    products: {
        icon: 'icon-bag',
        title: 'Total Products'
    },
}

const Stats = ({ data }) => {
    const formattedDate = data.map(d => ({
        value: d.total,
        ...statList[d.id]
    }))

    return (
        <div className="grid grid-cols-4 gap-5">
            {formattedDate.map((s, i) =>
                <StatsItem key={i} {...s} />
            )}
        </div>
    );
}

export default Stats;