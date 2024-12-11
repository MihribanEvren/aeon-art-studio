import Image from 'next/image';
import styles from './about.module.css';

const AboutPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h2>About Us</h2>
        <h1>
          Our mission is to empower creative minds and showcase the
          extraordinary in every piece of art we share.
        </h1>
        <p>
          From paintings to performance art, we believe in the transformative
          power of creativity to shape the world
        </p>
        <div className={styles.boxes}></div>
      </div>
      <div className={styles.imageContainer}></div>
    </div>
  );
};

export default AboutPage;
