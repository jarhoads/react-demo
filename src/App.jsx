import Header from './components/Header/Header.jsx';
import CoreConcepts from './components/CoreConcepts.jsx';
import Examples from './components/Examples.jsx';

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
  

  return (
    <>
      <Header />
      <main>
        <CoreConcepts />
        <Examples />
      </main>
    </>
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
