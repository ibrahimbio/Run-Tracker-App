
import './App.css';
import { BrowserRouter as Router} from "react-router-dom";
import MainContainer from './container/MainContainer';

function App() {
  return (
    <div className="App">
      <Router>
      <MainContainer/>  
      </Router>
    </div>
  );
}

export default App;
