import meditate from './assets/meditate.svg'
import swim from './assets/swim.svg'
import bike from './assets/bike.svg'
import muscle from './assets/muscle.svg'
import './Navbar.css';

export default function Navbar() {
  return (
    <nav className='nav'>
        <div className='nav-sports'>
            <button className='nav-sports-btn'>
                <img className='nav-sports-btn-img' src={meditate} alt='meditation logo' />
            </button>
            <button className='nav-sports-btn'>
                <img className='nav-sports-btn-img' src={swim} alt='swimming logo' />
            </button>
            <button className='nav-sports-btn'>
                <img className='nav-sports-btn-img' src={bike} alt='bike logo' />
            </button>
            <button className='nav-sports-btn'>
                <img className='nav-sports-btn-img' src={muscle} alt='muscle logo' />
            </button>
        </div>
        <span className='nav-copyrights'>Copyright, Sportsee 2020</span>
    </nav>
  )
}
