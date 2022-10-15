import './App.css';
import { Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import SignUp from './components/SignUp/SignUp'

function App() {
  return (
    <Routes>
      <Route path='/' element={<NavBar/>}/>
      <Route path='/complete_registration' element={<SignUp/>}/>
    </Routes>
  );
}

export default App;
