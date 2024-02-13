import { Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import Onboarding from './pages/onboarding'
import './index.css'
import Result from './pages/result'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/onboarding" element={<Onboarding />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </div>
  )
}

export default App
