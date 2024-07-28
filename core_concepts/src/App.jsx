import { useState } from "react";

import Header from "./components/Header";
import { CORE_CONCEPTS, EXAMPLES } from "./components/data";
import CoreConcepts from "./components/CoreConcepts";
import TabButton from "./components/TabButton";

function App() {
    const [selectedTopic, setSelectedTopic] = useState();
    function handleSelect(selectedButton) {
        setSelectedTopic(selectedButton);
    }

    let tabContent = <p>Please select a topic</p>;
    if (selectedTopic) {
        const exampleToRender = EXAMPLES[selectedTopic];
        tabContent = (
            <div id="tab-content">
                <h3>{exampleToRender.title}</h3>
                <p>{exampleToRender.description}</p>
                <pre>
                    <code>{exampleToRender.code}</code>
                </pre>
            </div>
        );
    }

    const core_concepts_list = [];
    for (let i = 0; i < CORE_CONCEPTS.length; i++) {
        core_concepts_list.push(<CoreConcepts {...CORE_CONCEPTS[i]} key={i} />);
    }

    return (
        <>
            <Header />
            <main>
                <section id="core-concepts">
                    <ul>{core_concepts_list}</ul>
                </section>
                <section id="examples">
                    <h2>Examples</h2>
                    <menu>
                        {["components", "jsx", "props", "state"].map(
                            (topic, index) => (
                                <TabButton
                                    key={index}
                                    onSelect={() => handleSelect(topic)}
                                    isSelected={selectedTopic === topic}
                                >
                                    {topic.toUpperCase()}
                                </TabButton>
                            )
                        )}
                    </menu>
                    {tabContent}
                </section>
            </main>
        </>
    );
}

export default App;
