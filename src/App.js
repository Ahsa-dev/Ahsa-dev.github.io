import './styles/App.css';
import RickAndMortyPage from './pages/RickAndMortyPage.js';
import CharacterDetail from './pages/CharacterDetail.js';
import HomePage from './pages/HomePage';
import Header from './components/Header';
import Glamping from './Glamping/components/Glamping';

import { AppStyle } from './styles/modules/app.module.scss';
import { Route } from "react-router-dom";

function App() {
  return (
    <div className={AppStyle}>
      <Route path="/" render={Header}/>
      <Route exact path="/" render={HomePage}/>
      <Route exact path="/page/:id" render={RickAndMortyPage}/>
      <Route exact path="/character/:id" render={CharacterDetail}/>
      <Route exact path="/glamping" render={Glamping}/>
    </div>
  );
}

export default App;
