
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { Layout } from './pages/Layout'
import { Signup } from './pages/Signup'
import { Login } from './pages/Login'
import { Home } from './pages/Home'
import axios from 'axios'


function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path='/signup' element={<Signup />} />
          <Route path='/login' element={<Login />} />
          <Route path='/home' element={<Home />} />
          <Route path='test' element={<Test01/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}


function Test01(){

  axios.post("http://localhost:3000/user/signup",{
  username: "Ram_13",
  firstName: "Ram",
  lastName: "Gavhane", 
  email: "ram@gmail.com", 
  password: "asdfg"})
  .then(res=>{
    console.log(res)
    console.log("done")
  }).catch(e=>{
    console.log(e)
  })

  return(
    <div>
      tetsing
    </div>
  )
}
export default App
