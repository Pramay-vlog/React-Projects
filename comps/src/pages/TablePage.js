import { COMPONENTS } from "../components"
import { BiSortAlt2 } from 'react-icons/bi'
import { useState } from "react"

function TablePage() {
    const data = [
        { name: "Orange", color: "bg-orange-500", score: 5 },
        { name: "Apple", color: "bg-red-500", score: 3 },
        { name: "Berry", color: "bg-blue-500", score: 1 },
        { name: "Melon", color: "bg-green-500", score: 2 },
    ]

    const column = [
        { name: 'Name', accessor: 'name', icon: <BiSortAlt2 />, sortValue: 'name' },
        { name: 'Color', accessor: 'color' },
        { name: 'Score', accessor: 'score', icon: <BiSortAlt2 />, sortValue: 'score' }
    ]

    const [sortConfig, setSortConfig] = useState(null);

    const sortedData = [...data].sort((a, b) => {
        const sortDirection = sortConfig?.direction === 'ascending' ? 1 : -1;
        const aValue = a[sortConfig?.key];
        const bValue = b[sortConfig?.key];
        if (sortConfig?.key === 'name' || sortConfig?.key === 'score') {
            return aValue < bValue ? -sortDirection : aValue > bValue ? sortDirection : 0;
        }
        return 0;
    });

    const handleSort = (key) => {
        const direction = sortConfig?.direction === 'ascending' ? 'descending' : 'ascending';
        setSortConfig({ key, direction })
    }

    return (
        <div> <COMPONENTS.Table
            data={sortedData}
            columns={column}
            handleSort={handleSort}
            sortConfig={sortConfig} />
        </div>
    )
}

export default TablePage;