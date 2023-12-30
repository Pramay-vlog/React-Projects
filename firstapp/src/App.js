import "bulma/css/bulma.css";
import ProfileCard from "./ProfileCard";
import alexaImg from "./images/alexa.png";
import cortanaImg from "./images/cortana.png";
import siriImg from "./images/siri.png";

const App = () => {
    return (
        <div>

            <div className="container" >
                <section className="section">
                    <div className="columns">
                        <div className="column-is-3">
                            <ProfileCard title="Alexa" handle="@alexa69" color="red" image={alexaImg} />
                        </div>
                        <div className="column-is-3">
                            <ProfileCard title="Cortana" handle="@cortana69" color="green" image={cortanaImg} />
                        </div>
                        <div className="column-is-3">
                            <ProfileCard title="Siri" handle="@siria69" color="blue" image={siriImg} />
                        </div>
                    </div>
                </section>
            </div>

        </div>
    )
};

export default App;