import logo from './logo.svg';
import './App.css';
import Viewdata from './Components/Viewdata';
import Stordata from './Components/Stordata';

function App() {
  return (
    <div className="App">
    <h1>TABLE</h1>
    <Viewdata/>

    <br/><br/><br/><br/><br/>
    <Stordata/>
     </div>
  );
}

export default App;
