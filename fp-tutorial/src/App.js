import './App.css';
import ReactFullpage from "@fullpage/react-fullpage";
import { Screen1 } from './components.js/screen1';
import { Screen2 } from './components.js/screen2';
import { Screen3 } from './components.js/screen3';
// My Written Code
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <p>Justin App</p>
//       </header>
//     </div>
//   );
// }

// export default App;

// Tutorial From Web
const anchors = ["firstPage", "secondPage", "thirdPage"];

const App = () => (
  <ReactFullpage
    anchors={anchors}
    navigation
    navigationTooltips={anchors}
    navigat
    sectionsColor={["blue","green","red" ]}
    onLeave={(origin, destination, direction) => {
      console.log("onLeave event", { origin, destination, direction });
    }}
    render={({ state, fullpageApi }) => {
      console.log("render prop change", state, fullpageApi);

      return (
        <div id="sectionsContainer">
          <div className="section">
            <h3><Screen1/></h3>
          </div>
          <div className="section">
            <h3><Screen2/></h3>
          </div>
          <div className="section">
            <h3><Screen3/></h3>
          </div>
        </div>
      );
    }}
  />
);
export default App;