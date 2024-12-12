'use client';

import { useState } from 'react';
import styles from './links.module.css';
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

  return (
    <div className="w-full gap-2 flex-between">
      <div className="flex-1 hidden md:flex-center">
        {links.map((link) => (
          <NavLink key={link.title} item={link} />
        ))}
        {session && isAdmin && (
          <NavLink item={{ title: 'Admin', path: '/admin' }} />
        )}
      </div>
      <div className="hidden auth md:block">
        {session ? (
          <button className="ml-3 p-1.5 text-center cursor-pointer font-bold">
            Logout
          </button>
        ) : (
          <NavLink item={{ title: 'Login', path: '/login' }} />
        )}
      </div>
      <button className="menu-button" onClick={() => setOpen((prev) => !prev)}>
        Menu
      </button>
      {open && (
        <div className="flex-col md:hidden mobile-links flex-center">
          {links.map((link) => (
            <NavLink key={link.title} item={link} />
          ))}
          {session ? (
            <button className={styles.logout}>Logout</button>
          ) : (
            <NavLink item={{ title: 'Login', path: '/login' }} />
          )}
        </div>
      )}
    </div>
  );
};

export default Links;
