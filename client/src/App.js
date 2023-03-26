import { Routes, Route, Link } from 'react-router-dom'




import './App.css';
import CreatePage from './Views/CreatePage';
import DashBoard from './Views/DashBoard';
import GamePage from './Views/GamePage';







function App() {
  return (
    <div className="App-nav">
        <Routes>
          <Route path='/' element={<DashBoard />} />
          <Route path='/status' element={<GamePage />} />
          <Route path='/new' element={<CreatePage />} />
        </Routes>
    </div>
  );
}

export default App;
