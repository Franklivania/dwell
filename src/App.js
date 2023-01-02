import './App.scss';
import Landing from './pages/Landing';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Landing/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
