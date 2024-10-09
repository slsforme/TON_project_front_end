import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './styles/app.css';
import Home from './pages/Home'
import Chart from './pages/Chart';
import FAQ from './pages/FAQ';
import Market from './pages/Market';
import AuthorizationPage from './pages/AuthorizationPage';
import RegistrationPage from './pages/RegistrationPage';


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
          <Route index element={<AuthorizationPage />}/>
          <Route path='/auth' element={<AuthorizationPage />}/>
          <Route index element={<RegistrationPage />}/>
          <Route path='/register' element={<RegistrationPage />}/>
        </Routes>
    </BrowserRouter>
	</>
  )
}

export default App