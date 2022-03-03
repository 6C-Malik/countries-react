import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navigation() {
  return (
    <div className='navigation'>
        <NavLink  to="/" className={({isActive}) => isActive ? 'nav-active' : ''}>
            Accueil
        </NavLink>
        <NavLink  to="/about" className={({isActive}) => isActive ? 'nav-active' : ''}>
            À propos
        </NavLink>
    </div>
  )
}
