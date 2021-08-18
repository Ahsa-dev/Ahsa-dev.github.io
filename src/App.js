import './styles/App.css';
import FrontPage from './pages/FrontPage.js';
import CharacterDetail from './pages/CharacterDetail.js'
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" render={FrontPage}/>
        <Route exact path="/character/:id" render={CharacterDetail}/>
      </Router>
    </div>
  );
}

export default App;
