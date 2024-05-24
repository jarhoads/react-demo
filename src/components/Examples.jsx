import { useState } from "react";
import { EXAMPLES } from "../data.js";
import TabButton from './TabButton.jsx';
import Section from "./Section.jsx";
import Tabs from "./Tabs.jsx";

export default function Examples () {

    const [selectedTopic, setSelectedTopic] = useState();

  function handleSelect (selectedButton) { 
    // tabContent = selectedButton;
    // NOTE: updated value will only be available after the component function re-executes
    //       this call is scheduling it to run in the next cycle
    setSelectedTopic(selectedButton);
    console.log(`Hello World! - selected button: ${selectedButton}`); 
  }

  // can also use {!selectedTopic && <p>Please select a topic</p>}
  // or 
  // {!selectedTopic ? 
  //   (<p>Please select a topic</p>) : 
  //   (<div id='tab-content'>
  //     <h3>{EXAMPLES[selectedTopic].title}</h3>
  //     <p>{EXAMPLES[selectedTopic].description}</p>
  //     <pre>
  //       <code>
  //         {EXAMPLES[selectedTopic].code}
  //       </code>
  //     </pre>
  //   </div>)
  // }

  let tabContent = <p>Please select a topic</p>;
  if (selectedTopic) {
    tabContent = (
      <div id='tab-content'>
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>
            {EXAMPLES[selectedTopic].code}
          </code>
        </pre>
      </div>
    );
  }

  // props not auto forwarded to components
  // id prop for 'examples' not set on section 
  // only added when done explicitly in code
  // --> use forwarded/proxy props
  // custom components (variables) for buttonsContainer must be passed with {Section} 
    return (
      <Section title={"Examples"} id="examples">
        <Tabs
          ButtonsContainer='menu'
          buttons={
            <>
              <TabButton
                isSelected={selectedTopic === "components"}
                onClick={() => handleSelect("components")}
              >
                Components
              </TabButton>
              <TabButton
                isSelected={selectedTopic === "jsx"}
                onClick={() => handleSelect("jsx")}
              >
                JSX
              </TabButton>
              <TabButton
                isSelected={selectedTopic === "props"}
                onClick={() => handleSelect("props")}
              >
                Props
              </TabButton>
              <TabButton
                isSelected={selectedTopic === "state"}
                onClick={() => handleSelect("state")}
              >
                State
              </TabButton>
            </>
          }
        >
          {tabContent}
        </Tabs>
      </Section>
    );
}