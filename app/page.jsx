import Image from 'next/image';
import styles from './home.module.css';
import NeonCircle from '@/components/ui/neonCircle/NeonCircle';

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Artspire.</h1>
        <p className={styles.desc}>
          Welcome to a world of creativity where art knows no bounds. Explore,
          imagine, and be inspired. Discover unique expressions of art, crafted
          by visionaries who dare to dream.
        </p>
        <div className={styles.buttons}>
          <button className={styles.button}>Learn More</button>
          <button className={styles.button}>Contact</button>
        </div>
      </div>
      <div className={styles.imageContainer}>
        <NeonCircle />
        <Image src="/statue.png" alt="Home" fill className={styles.heroImg} />
      </div>
    </div>
  );
};

export default Home;
