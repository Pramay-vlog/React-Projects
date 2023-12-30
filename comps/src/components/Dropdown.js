import { useState, useEffect, useRef } from "react";
import { AiFillCaretDown } from "react-icons/ai";
import Panel from './Panel'

function Dropdown({ options, value, onChange }) {
    const [isOpen, setIsOpen] = useState(false)
    const divEl = useRef()

    useEffect(() => {
        const handler = (event) => {
            if(!divEl.current) return;

            if(!divEl.current.contains(event.target)){
                // outside click
                setIsOpen(false)
            }
        }

        document.addEventListener("click", handler, true)
        return (() => document.removeEventListener("click", handler))
    }, [])

    const handleToggle = () => {
        setIsOpen(!isOpen)
    }

    const handleOptionClick = (option) => {
        setIsOpen(false)
        onChange(option)
    }

    const renderOptions = options.map((item) => {
        return <div
            className="hover:bg-sky-200 rounded cursor-pointer"
            key={item.value} onClick={() => handleOptionClick(item)}
        >
            {item.label}
        </div>
    })

    return <div ref={divEl} className="w-48 relative" >
        <Panel
            className="flex justify-between items-center cursor-pointer"
            onClick={handleToggle} >
            {value?.label || "Select..."} <AiFillCaretDown />
        </Panel>
        {isOpen && <Panel className="absolute top-full" > {renderOptions} </Panel>}
    </div>
}

export default Dropdown;