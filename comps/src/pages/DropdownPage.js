import { useState } from "react";
import { COMPONENTS } from "../components"

function DropdownPage() {
    const [selection, setSelection] = useState(null)

    const handleClick = (option) => {
        setSelection(option)
    }

    const options = [
        { label: "Black", value: "black" },
        { label: "Red", value: "red" },
        { label: "Yellow", value: "yellow" },
    ]

    return <COMPONENTS.Dropdown
        options={options}
        value={selection}
        onChange={handleClick}
    />
}

export default DropdownPage;