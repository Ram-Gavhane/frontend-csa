
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { Layout } from './pages/Layout'
import { Signup } from './pages/Signup'
import { Login } from './pages/Login'
import { Home } from './pages/Home'


function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path='/signup' element={<Signup />} />
          <Route path='/login' element={<Login />} />
          <Route path='/home' element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App
