import './App.css';
import Header from './Header';
import Home from './Home'
import Navbar from './Navbar';
import Profil from './Profil';
import { ApiProvider } from "./api/ApiContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <Navbar />
        <ApiProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profil/:id" element={<Profil />} />
          </Routes>
        </ApiProvider>
      </BrowserRouter>
    </>
  )
}

export default App;
