import componentsImage from "./assets/images/components.png";
import stateImage from "./assets/images/state.png";
import eventsImage from "./assets/images/events.png";

import Header from "./components/Header";
import ConceptItem from "./components/ConceptItem";

const concepts = [
    {
        id: 1,
        title: "Components",
        image: componentsImage,
        description:
            "Components let you split the UI into independent, reusable pieces, and think about each piece in isolation. Components can receive data via props, and they can render dynamic output using JSX.",
    },
    {
        id: 2,
        title: "State",
        image: stateImage,
        description:
            "State is data that may change over time. As it changes, the UI should be updated to reflect the updated data. Each component can maintain its own state and multiple components can share state.",
    },
    {
        id: 3,
        title: "Events",
        image: eventsImage,
        description:
            "Event handlers are added via props to (built-in) components. You pass functions as values to such event handlers to control which functions gets executed for which event.",
    },
];

function App() {
    const conceptCardView = concepts.map((eachConcept) => {
        return (
            <ConceptItem
                key={eachConcept.id}
                title={eachConcept.title}
                image={eachConcept.image}
                description={eachConcept.description}
            />
        );
    });
    return (
        <>
            <Header />
            <ul id="concepts">{conceptCardView}</ul>
        </>
    );
}

export default App;
