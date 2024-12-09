'use client';

import Link from 'next/link';
import styles from './navLink.module.css';
import { usePathname } from 'next/navigation';

const NavLink = ({ item }) => {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <Link
      className={`${styles.link} ${pathname === item.path && styles.active}`}
      href={item.path}
    >
      {item.title}
    </Link>
  );
};

export default NavLink;
