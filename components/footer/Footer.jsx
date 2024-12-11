import styles from './footer.module.css';

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>Aeon</div>
      <div className={styles.text}>
        Created by Mihri. 🌐 All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
