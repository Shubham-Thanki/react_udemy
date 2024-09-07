import { useState } from "react";

import { EXAMPLES } from "./data";
import Section from "./Section";
import Tabs from "./Tabs";
import TabButton from "./TabButton";

export default function Examples() {
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

    const menuButtons = ["components", "jsx", "props", "state"].map(
        (topic, index) => (
            <TabButton
                key={index}
                onClick={() => handleSelect(topic)}
                isSelected={selectedTopic === topic}
            >
                {topic.toUpperCase()}
            </TabButton>
        )
    );

    return (
        <Section id="examples" title="Examples">
            <Tabs
                // Using the slots concept here to pass all the menu buttons
                // to the buttons slot to the Tabs component
                buttons={menuButtons}
                // We used another new concept here...
                // where in we pass the identifier of the component as a prop value.
                // -------------------------------------------------------------------
                // We could've simply wrapped the Tabs with `menu`
                // but this is a more elegant way of doing it.
                // If we wish to pass a custom component --> ButtonsContainer={CustomName}
                ButtonsContainer="menu"
            >
                {tabContent}
            </Tabs>
        </Section>
    );
}
