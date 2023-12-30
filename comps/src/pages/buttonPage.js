import { COMPONENTS } from "../components"

function ButtonPage() {

    return (
        <div>
            <div>
                <COMPONENTS.Button primary> Click me</COMPONENTS.Button>
            </div>
            <div>
                <COMPONENTS.Button secondary>Click me</COMPONENTS.Button>
            </div>
            <div>
                <COMPONENTS.Button success> Click me</COMPONENTS.Button>
            </div>
            <div>
                <COMPONENTS.Button warning >Click me</COMPONENTS.Button>
            </div>
            <div>
                <COMPONENTS.Button danger> Click me</COMPONENTS.Button>
            </div>
        </div>
    )

}

export default ButtonPage;