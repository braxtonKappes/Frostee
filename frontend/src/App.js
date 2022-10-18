import './App.css';
import { Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import SignUp from './components/SignUp/SignUp'
import HomePage from './components/HomePage/HomePage'

function App() {
  return (
    <Routes>
      <Route path='/' element={<><NavBar/><HomePage/></>}/>
      <Route path='/complete_registration' element={<SignUp/>}/>
    </Routes>
  );
}

export default App;
