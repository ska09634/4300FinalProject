import './App.css';
import AnimalDetail from './components/AnimalDetail';
import Home from './components/Home';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path='/' element={<Home/>}></Route>
          <Route path='/details' element={<AnimalDetail/>}></Route>
          <Route path='/home' element={<Home/>}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
