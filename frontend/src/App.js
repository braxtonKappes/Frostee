import './App.css';
import { Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import SignUp from './components/SignUp/SignUp'
import Profile from './components/Profile/Profile';

function App() {
  return (
    <Routes>
      <Route path='/' element={<NavBar />} />
      <Route path='/profile' element={<Profile />} />
    </Routes>
  );
}

export default App;
