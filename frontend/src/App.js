import './App.css';
import { Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import SignUp from './components/SignUp'
import HomePage from './components/HomePage'

function App() {
  return (
    <div className='all-content-wrapper'>
        <Routes>
          <Route path='/' element={<><NavBar/><HomePage/></>}/>
          <Route path='/complete_registration' element={<SignUp/>}/>
        </Routes>
    </div>
  );
}

export default App;
