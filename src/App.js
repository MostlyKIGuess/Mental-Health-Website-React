import './App.css'
import { BrowserRouter as Router, Switch, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Router>
      </header>
    </div>
  );
}

export default App;
