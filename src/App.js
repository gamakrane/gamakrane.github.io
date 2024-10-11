// import logo from './logo.svg';
import './App.css';
import { NavBar } from './components/NavBar';
import { Banner} from './components/Banner' ;
import {Skills} from './components/Skills';
import { Projects } from './components/Projects';
import {Footer} from'./components/Footer';
import {Education} from'./components/Education';
import {Experience} from'./components/Experience';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Education/>
      <Experience/>
      <Projects />
      <Footer />

    </div>
  );
}

export default App;
