import { COMPONENTS } from "./components"
import { PAGES } from "./pages"

function App() {
    return (
        <div className='container mx-auto grid grid-cols-6 gap-4 ml-4 mt-4' >
            <COMPONENTS.Sidebar />

            <div className='col-span-5' >
                <COMPONENTS.Route path="/accordian" >
                    <PAGES.AccordionPage />
                </COMPONENTS.Route>

                <COMPONENTS.Route path="/" >
                    <PAGES.DropdownPage />
                </COMPONENTS.Route>

                <COMPONENTS.Route path="/button" >
                    <PAGES.ButtonPage />
                </COMPONENTS.Route>

                <COMPONENTS.Route path="/modal" >
                    <PAGES.ModalPage />
                </COMPONENTS.Route>
                <COMPONENTS.Route path="/table" >
                    <PAGES.TablePage />
                </COMPONENTS.Route>
            </div>
        </div>
    )
}

export default App;