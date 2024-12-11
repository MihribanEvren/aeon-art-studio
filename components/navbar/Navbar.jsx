import Link from 'next/link';
import Links from './links/Links';
import styles from './navbar.module.css';

const Navbar = () => {
  return (
    <div className={styles.container}>
      <Link className={styles.logo} href="/">
        Aeon
      </Link>
      <div className={styles.linksContainer}>
        <Links />
      </div>
    </div>
  );
};

export default Navbar;
