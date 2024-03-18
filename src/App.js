import './App.css';
import Header from './Header';
import Home from './Home'
import Navbar from './Navbar';
import Profil from './Profil';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <Navbar />
          <Routes>
            <Route path="/home/:id" index element={<Home />} />
            <Route path="/profil/:id" element={<Profil />} />
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
