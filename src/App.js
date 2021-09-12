import './styles/App.css';
import FrontPage from './pages/FrontPage.js';
import CharacterDetail from './pages/CharacterDetail.js'
import HomePage from './pages/HomePage';
import { Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Route exact path="/" render={HomePage}/>
      <Route exact path="/page/:id" render={FrontPage}/>
      <Route exact path="/character/:id" render={CharacterDetail}/>
    </div>
  );
}

export default App;
