
const Header = ({ column, handleSort }) => {
    const handleClick = () => {
        handleSort(column.sortValue)
    }

    return (
        <th onClick={handleClick} className="p-3 flex-col bg-gray-300">
            {column.name}
        </th>
    )
}

const Table = ({ data, columns, handleSort }) => {
    return (
        <table>
            <thead>
                <tr>
                    {columns.map((column) => {
                        return <Header
                            key={column.accessor}
                            column={column}
                            handleSort={handleSort}
                            />
                    })}
                </tr>
            </thead>
            <tbody>
                {data.map((item, i) => {
                    return (
                        <tr key={i} className="border-b" >
                            {columns.map((column) => {
                                return <td key={column.accessor} className="p-3 flex-col bg-orange-300" >
                                    {item[column.accessor]}
                                </td>
                            })}
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}

export default Table;