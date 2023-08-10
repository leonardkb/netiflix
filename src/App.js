

import './App.css';
import Banner from './Components/Banner/Banner';
import {action,originals} from './Url'
import Navbar from './Components/Navbar/Navbar';
import Rowpost from './Components/Rowpost/Rowpost';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Banner />
      <Rowpost url={originals} title='Netflix Originals'/>
      <Rowpost url={action} title='Action' isSmall/>
    </div>
  );
}

export default App;
