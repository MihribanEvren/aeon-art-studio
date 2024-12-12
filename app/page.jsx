import Image from 'next/image';
import NeonCircle from '@/components/ui/neonCircle/NeonCircle';

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-20 md:flex-row md:justify-between">
      <div className="gap-6 text-container md:flex-1">
        <h1 className="text-80-bold">Artspire.</h1>
        <p className="text-20-normal">
          Welcome to a world of creativity where art knows no bounds. Explore,
          imagine, and be inspired. Discover unique expressions of art, crafted
          by visionaries who dare to dream.
        </p>
        <div className="buttons">
          <button className="button bg-[--btn] text-white-small">
            Learn More
          </button>
          <button className="button text-black-small bg-[--textSoft]">
            Contact
          </button>
        </div>
      </div>
      <div className="image-container md:flex-1">
        <NeonCircle />
        <Image src="/statue.png" alt="Statue" fill className="hero-img" />
      </div>
    </div>
  );
};

export default Home;
