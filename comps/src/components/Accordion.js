import { useState } from "react";
import { AiFillCaretDown, AiFillCaretLeft } from "react-icons/ai";

function Accordion({ items }) {
    const [expandedIndex, setExpandedIndex] = useState(0);
    //* || returns first truthy value.
    //* && returns last truthy value or first falsy value.

    const handleClick = (nextIndex) => {
        setExpandedIndex((current) => {
            if (current === nextIndex) {
                return -1
            } else {
                return nextIndex
            }
        })
    }

    const renderItems = items.map((item, index) => {
        const isExpanded = expandedIndex === index;
        const icon = <span>
            {isExpanded ? <AiFillCaretDown /> : <AiFillCaretLeft />}
        </span>

        return (
            <div key={item.id}>
                <div className="flex p-3 bg-gray-200 border-b items-center cursor-pointer" onClick={() => handleClick(index)} >
                    {item.label}
                    {icon}
                </div>
                {isExpanded && <div className="border-b p-5" >
                    {item.content}
                </div>}
            </div>
        )
    })
    return (
        <div className="border-x border-t roinded" > {renderItems} </div>
    )
}

export default Accordion;