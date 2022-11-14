import './App.css';
import Home from './components/Home';
import AnimalDetail from './components/AnimalDetail';
import {BrowserRouter as Router, Route, Routes as Switch} from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path='/details' component={<AnimalDetail/>}></Route>
          <Route exact path='/' component={<Home/>}></Route>
        </Switch>
      </Router>
      <Home/>
    </>
  );
}

export default App;
