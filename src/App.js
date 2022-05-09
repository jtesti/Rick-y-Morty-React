import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import CharacterSearch from './components/CharacterSearch';
import ApiRequest from "./components/ApiRequest";
import './App.css';

function App() {
  return (
    <Router>
        <div className='App'>
          <NavBar />

          <Routes>
            <Route path='search-character' element={<CharacterSearch />} />
            <Route path='character-list' element={<ApiRequest />} />
          </Routes>
        </div>
    </Router>
  );
}

export default App;
