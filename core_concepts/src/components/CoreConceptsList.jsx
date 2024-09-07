import CoreConcept from "./CoreConcept";
import Section from "./Section";
import { CORE_CONCEPTS } from "./data";

export default function CoreConceptsList() {
    const core_concepts_list = [];
    for (let i = 0; i < CORE_CONCEPTS.length; i++) {
        core_concepts_list.push(<CoreConcept {...CORE_CONCEPTS[i]} key={i} />);
    }

    return (
        <Section id="core-concepts">
            <ul>{core_concepts_list}</ul>
        </Section>
    );
}
