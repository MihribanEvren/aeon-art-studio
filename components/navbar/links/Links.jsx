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
    <div className={styles.container}>
      <div className={styles.links}>
        {links.map((link) => (
          <NavLink key={link.title} item={link} />
        ))}
        {session && isAdmin && (
          <NavLink item={{ title: 'Admin', path: '/admin' }} />
        )}
      </div>
      <div className={styles.auth}>
        {session ? (
          <button className={styles.logout}>Logout</button>
        ) : (
          <NavLink item={{ title: 'Login', path: '/login' }} />
        )}
      </div>
      <button
        className={styles.menuButton}
        onClick={() => setOpen((prev) => !prev)}
      >
        Menu
      </button>
      {open && (
        <div className={styles.mobileLinks}>
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
