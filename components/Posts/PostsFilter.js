
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Select from '../shared/Input/Select'
import Option from '../shared/Input/Select/Option'

const filterData = ['Requested', 'Accepted', 'Denied', 'All']

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
        <Select icon={'icon-filter'} value={filter} onChange={handleFilterChange}>
            {filterData.map((d, i) => 
                <Option key={i} value={d}>{d}</Option>
            )}
        </Select>
    );
}
 
export default PostsFilter;