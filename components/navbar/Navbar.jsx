import Links from './links/Links';
import styles from './navbar.module.css';

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>Mihi</div>
      <div className={styles.linksContainer}>
        <Links />
      </div>
    </div>
  );
};

export default Navbar;
