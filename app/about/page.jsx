import Image from 'next/image';
import styles from './about.module.css';

const AboutPage = () => {
  return (
    <div>
      <div className={styles.imgContainer}>
        <Image
          src="https://images.pexels.com/photos/19536437/pexels-photo-19536437/free-photo-of-dekorasyon-susleme-oyuncak-oyuncaklar.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="about"
          fill
        />
      </div>
    </div>
  );
};

export default AboutPage;
