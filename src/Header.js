import React from 'react'
import logo from './assets/logo.svg'
import './Header.css'

export default function Header() {
  return (
    <header className='main-header'>
        <img className='main-header-logo' src={logo} alt='logo' />
        <nav className='main-header-nav'>
           <a className='main-header-nav-links' href='#'>Accueil</a>
           <a className='main-header-nav-links' href='#'>Profil</a>
           <a className='main-header-nav-links' href='#'>Réglage</a>
           <a className='main-header-nav-links' href='#'>Communauté</a>
        </nav>
    </header>
  )
}
