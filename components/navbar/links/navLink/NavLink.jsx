'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NavLink = ({ item }) => {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <Link
      className={`py-3 px-5 text-center font-medium ${
        pathname === item.path && 'bg-[--text] text-[--bg] rounded-3xl'
      }`}
      href={item.path}
    >
      {item.title}
    </Link>
  );
};

export default NavLink;
