// import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/navbar';
import HomePage from './components/homepage/homePage'
import Collabrative from "./components/Colabrative/collabrative"
import SectionThree from "./components/SectionThree/sectionThree"
import SectionFour from"./components/SectionFour/SectionFour"
import HowCapinotrainer from "./components/HowCapinotrainer/howCapinotrainer"
import WhtaMakesCapino from "./components/WhtaMakesCapino/whtaMakesCapino"
import Whoiscapino from "./components/WhoisCapino/whoiscapino"
import RealSuccess from "./components/RealSuccess/realSuccess"
import KeyFeatures from "./components/KeyFeatures/keyFeatures"


function App() {
  return (
    <div className="App">
      
      <Navbar />
      <HomePage/>
      <Collabrative />
      <SectionThree />
      <SectionFour />
      <HowCapinotrainer/>
      <WhtaMakesCapino/>
      <Whoiscapino/>
      <RealSuccess/>
      <KeyFeatures />
      sample
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
