import { Routes, Route, Link } from 'react-router-dom'




import './App.css';
import CreatePage from './Views/CreatePage';
import DashBoard from './Views/DashBoard';
import GamePage from './Views/GamePage';







function App() {
  return (
    <div className="App-nav">
        <Routes>
          <Route path='/player' element={<DashBoard />} />
          <Route path='/status' element={<GamePage />} />
          <Route path='/player/new' element={<CreatePage />} />
        </Routes>
    </div>
  );
}

export default App;
