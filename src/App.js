import './App.css';
import Header from './Header';
import Home from './pages/Home'
import Navbar from './Navbar';
import Profil from './pages/Profil';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <Navbar />
          <Routes>
            <Route path="/" index element={<Home />} />
            <Route path="/profil/:id" element={<Profil />} />
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
