import './App.css';
import { Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import SignUp from './components/SignUp'
import HomePage from './components/HomePage'
import Carousel from './components/Carousel/Carousel';
import SpecialsCarousel from './components/Carousel/SpecialsCarousel';
import CategoryCarousel from './components/Carousel/CategoryCarousel';
import SmallCarousel from './components/Carousel/SmallCarousel';

function App() {

  const games = [

    {title: "game 1", info: "game info here", title_image:"images/building.png", images: ["images/building.png","images/building.png","images/building.png","images/building.png"]},
    {title: "game 2", info: "game info here", title_image:"images/cat.png", images: ["images/cat.png","images/cat.png","images/cat.png","images/cat.png"]},
    {title: "game 3", info: "game info here", title_image:"images/fish.jpg", images: ["images/fish.jpg","images/fish.jpg","images/fish.jpg","images/fish.jpg"]},
    {title: "game 4", info: "game info here", title_image:"images/landscape.jpg", images: ["images/landscape.jpg","images/landscape.jpg","images/landscape.jpg","images/landscape.jpg"]},
    {title: "game 5", info: "game info here", title_image:"images/lightning.png", images: ["images/lightning.png","images/lightning.png","images/lightning.png","images/lightning.png"]},
    {title: "game 6", info: "game info here", title_image:"images/owl.jpg", images: ["images/owl.jpg","images/owl.jpg","images/owl.jpg","images/owl.jpg"]},

  ];

  /*
  <Carousel games={games}/>
  <SpecialsCarousel games={games}/>
  <SpecialsCarousel games={games}/>

  <CategoryCarousel categories={games}/>
  */


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
