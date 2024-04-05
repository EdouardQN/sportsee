import './App.css';
import Header from './Header';
import Home from './pages/Home'
import Navbar from './Navbar';
import Profil from './pages/Profil';
import Error404 from './pages/Error404';
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
            <Route path="/notfound" element={<Error404 />} />

            <Route path="*" index element={<Error404 />} />
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
