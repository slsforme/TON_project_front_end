import { BrowserRouter, Router, Routes, Route } from 'react-router-dom';

import './styles/app.css';
import Home from './pages/Home'
import Chart from './pages/Chart';

function App() {
  return (
	<>
    <BrowserRouter>
        <Routes>
          <Route index element={<Home />}/>
          <Route path='/home' element={<Home />}/>
          <Route index element={<Chart />}/>
          <Route path='/chart' element={<Chart />}/>
        </Routes>
    </BrowserRouter>
	</>
  )
}

export default App