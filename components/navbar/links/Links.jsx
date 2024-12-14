'use client';

import { useState } from 'react';
import NavLink from './navLink/NavLink';

const links = [
  {
    title: 'Home',
    path: '/',
  },
  {
    title: 'About',
    path: '/about',
  },
  {
    title: 'Contact',
    path: '/contact',
  },
  {
    title: 'Blog',
    path: '/blog',
  },
];

const Links = () => {
  const [open, setOpen] = useState(false);

  const session = true;
  const isAdmin = true;

  const renderLinks = () => (
    <>
      {links.map((link) => (
        <NavLink key={link.title} item={link} />
      ))}
      {session && isAdmin && (
        <NavLink item={{ title: 'Admin', path: '/admin' }} />
      )}
    </>
  );

  const renderAuth = () =>
    session ? (
      <button className="ml-3 p-1.5 text-center cursor-pointer font-bold">
        Logout
      </button>
    ) : (
      <NavLink item={{ title: 'Login', path: '/login' }} />
    );

  return (
    <div className="w-full gap-2 flex-between">
      {/* Desktop Links */}
      <div className="flex-1 hidden md:flex-center">{renderLinks()}</div>

      {/* Auth Link */}
      <div className="hidden md:block">{renderAuth()}</div>

      {/* Mobile Menu Button */}
      <button className="menu-button" onClick={() => setOpen((prev) => !prev)}>
        Menu
      </button>

      {/* Mobile Links And Auth Link */}
      {open && (
        <div className="flex-col md:hidden mobile-links flex-center">
          {renderLinks()}
          {renderAuth()}
        </div>
      )}
    </div>
  );
};

export default Links;
