import Image from 'next/image';
import NeonCircle from '@/components/ui/neonCircle/NeonCircle';

const Home = () => {
  return (
    <div className="content-container">
      <div className=" text-container md:flex-1">
        <h1 className="text-50-bold md:text-80-bold">Artspire.</h1>
        <p className="text-justify md:text-left text-14-normal md:text-20-normal">
          Welcome to a world of creativity where art knows no bounds. Explore,
          imagine, and be inspired. Discover unique expressions of art, crafted
          by visionaries who dare to dream.
        </p>
        <div className="buttons">
          <button className="button bg-[--secondary] text-white-small">
            Learn More
          </button>
          <button className="button text-black-small bg-[--textSoft]">
            Contact
          </button>
        </div>
      </div>
      <div className="image-container md:flex-1">
        <div className="cross-pattern">
          <NeonCircle />
          <Image
            src="/statue.png"
            alt="Statue for Home Page"
            fill
            priority
            className="object-cover hero-img"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
