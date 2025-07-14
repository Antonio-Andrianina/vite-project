import { MenuIcon } from './icons';
import '../styles/header.css';
import React from 'react';

function Header() {
  return React.createElement('header', { className: 'header' },
    React.createElement('div', { className: 'header-logo' }, 'HEI'),
    React.createElement('nav', { className: 'header-nav' },
      React.createElement('a', { href: '#', className: 'header-link active' }, 'ACCUEIL'),
      React.createElement('a', { href: '#', className: 'header-link' }, 'ACTUALITÉS'),
      React.createElement('a', { href: '#', className: 'header-link' }, 'BOURSE D\'ÉTUDES'),
      React.createElement('a', { href: '#', className: 'header-link' }, 'INSCRIPTION'),
      React.createElement('a', { href: '#', className: 'header-link' }, 'INTRANET')
    ),
    React.createElement('button', { className: 'header-mobile-menu' },
      React.createElement(MenuIcon, { className: 'menu-icon' })
    )
  );
}

export default Header;