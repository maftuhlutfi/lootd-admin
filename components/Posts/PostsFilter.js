
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Dropdown from '../shared/Input/Dropdown'
import DropdownItem from '../shared/Input/Dropdown/DropdownItem'

const filterData = ['requested', 'accepted', 'denied', 'all']

const PostsFilter = () => {
    const router = useRouter()
    const [filter, setFilter] = useState(filterData[0])

    const handleFilterChange = value => {
        router.push({
            query: {
                ...router.query,
                filter: value
            }
        })
    }

    useEffect(() => {
        setFilter(router.query.filter || filterData[0])
    }, [router.query.filter])

    return (
        <Dropdown icon={'icon-filter'} value={filter} onChange={handleFilterChange}>
            {filterData.map((d, i) =>
                <DropdownItem key={i} value={d}>{d}</DropdownItem>
            )}
        </Dropdown>
    );
}

export default PostsFilter;