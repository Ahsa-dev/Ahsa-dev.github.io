import './styles/App.css';
import FrontPage from './pages/FrontPage.js';
import CharacterDetail from './pages/CharacterDetail.js';
import HomePage from './pages/HomePage';
import { AppStyle } from './styles/modules/app.module.scss';
import { Route } from "react-router-dom";

function App() {
  return (
    <div className={AppStyle}>
      <Route exact path="/" render={HomePage}/>
      <Route exact path="/page/:id" render={FrontPage}/>
      <Route exact path="/character/:id" render={CharacterDetail}/>
    </div>
  );
}

export default App;
