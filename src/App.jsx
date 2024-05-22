
// import componentsImg from './assets/components.png';
import {useState} from 'react';

import { CORE_CONCEPTS, EXAMPLES } from './data.js';
import Header from './components/Header/Header.jsx';
import CoreConcept from './components/CoreConcept.jsx';
import TabButton from './components/TabButton.jsx';

// function CoreConcept(props) {
//   return ( 
//     <li>
//       <img src={props.image} alt={props.title} />
//       <h3>{props.title}</h3>
//       <p>{props.description}</p>
//     </li>
//   );
// }



function App() {
  // can't use a regular variable in react to update state
  // components only render once with regular variables
  // let tabContent = 'Please click a button'

  // use react state function variable called state hook - import with useState
  // can set/update component specific state that gets re-evaluated by react component
  // functions that must be called inside react component functions or within custom react hooks
  // must be called on top level of component function

  // stateArray will always have 2 elements
  // const stateArray = useState('Please click a button');
  // 1st element - current data snapshot for component (actual data, current value)
  // 2nd value - always a function provided by react, used to update the stored value
  //             valling wil also make react re-render the component w/ new data
  // selectedTopic re-created when setSelectedTopic is called
  // const [selectedTopic, setSelectedTopic] = useState('components');
  const [selectedTopic, setSelectedTopic] = useState();

  function handleSelect (selectedButton) { 
    // selectedbutton => 'components', 'jsx', 'props', 'state'
    // tabContent = selectedButton;
    // NOTE: updated value will only be available after the component function re-executes
    //       this call is scheduling it to run in the next cycle
    setSelectedTopic(selectedButton);
    console.log(`Hello World! - selected button: ${selectedButton}`); 
  }

  console.log('App component rendering');

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

  return (
    <div>
      <Header />
      <main>
        <section id='core-concepts'>
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcept {...CORE_CONCEPTS[0]}/>
            <CoreConcept {...CORE_CONCEPTS[1]}/>
            <CoreConcept {...CORE_CONCEPTS[2]}/>
            <CoreConcept {...CORE_CONCEPTS[3]}/>
          </ul>
        </section>
        <section id='examples'>
          <h2>Examples</h2>
          <menu>
            <TabButton isSelected={selectedTopic === 'components'} onSelect={() => handleSelect('components')}>Components</TabButton>
            <TabButton isSelected={selectedTopic === 'jsx'} onSelect={() => handleSelect('jsx')}>JSX</TabButton>
            <TabButton isSelected={selectedTopic === 'props'} onSelect={() => handleSelect('props')}>Props</TabButton>
            <TabButton isSelected={selectedTopic === 'state'} onSelect={() => handleSelect('state')}>State</TabButton>
          </menu>

          {tabContent}
          
        </section>
      </main>
    </div>
  );
}

// longer props syntax
// <ul>
//             <CoreConcept {...CORE_CONCEPTS[0]}/>
//             <CoreConcept 
//               title={CORE_CONCEPTS[1].title} 
//               description={CORE_CONCEPTS[1].description}
//               image={CORE_CONCEPTS[1].image}/>
//             <CoreConcept 
//               title={CORE_CONCEPTS[2].title} 
//               description={CORE_CONCEPTS[2].description}
//               image={CORE_CONCEPTS[2].image}/>
//             <CoreConcept 
//               title={CORE_CONCEPTS[3].title} 
//               description={CORE_CONCEPTS[3].description}
//               image={CORE_CONCEPTS[3].image}/>
//           </ul>

export default App;
