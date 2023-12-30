import { COMPONENTS } from "../components"

function AccordionPage() {
    const items = [
        {
            id: 1,
            label: "Loeam ipsum label 1",
            content: "Loeam ipsum content 1",
        },
        {
            id: 2,
            label: "Loeam ipsum label 2",
            content: "Loeam ipsum content 2",
        },
        {
            id: 3,
            label: "Loeam ipsum label 3",
            content: "Loeam ipsum content 3",
        },
    ]

    return (
        <div>
            <COMPONENTS.Accordion items={items} />
        </div>
    )
}

export default AccordionPage;