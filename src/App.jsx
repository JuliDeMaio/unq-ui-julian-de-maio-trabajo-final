import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HomeScreen from './pages/HomeScreen';
import PlayScreen from './pages/PlayScreen';

function App() {

  return (
    <Router>
      <main>
        <Routes>
          <Route path="/" element={<HomeScreen/>} />
          <Route path="/play" element={<PlayScreen/>} />
        </Routes>
      </main>
    </Router>
  )
}

export default App
