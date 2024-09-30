import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './styles/app.css';
import Home from './pages/Home'
import Chart from './pages/Chart';
import FAQ from './pages/FAQ';
import Market from './pages/Market';

function App() {
  return (
	<>
    <BrowserRouter>
        <Routes>
          <Route index element={<Home />}/>
          <Route path='/home' element={<Home />}/>
          <Route index element={<Chart />}/>
          <Route path='/chart' element={<Chart />}/>
          <Route index element={<FAQ />}/>
          <Route path='/faq' element={<FAQ />}/>
          <Route index element={<Market />}/>
          <Route path='/market' element={<Market />}/>
        </Routes>
    </BrowserRouter>
	</>
  )
}

export default App