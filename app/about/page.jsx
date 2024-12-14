import NeonCircle from '@/components/ui/neonCircle/NeonCircle';
import Image from 'next/image';

const AboutPage = () => {
  return (
    <div className="content-container">
      <div className="text-container md:flex-1">
        <h2 className="font-semibold text-[--primary]">About Us</h2>
        <h1 className="text-30-bold md:text-50-bold">
          Our mission is to empower creative minds.
        </h1>
        <p className="text-justify md:text-left text-14-normal md:text-20-normal">
          From paintings to performance art, we believe in the transformative
          power of creativity to shape the world
        </p>
        <div className="flex-between">
          <div className="flex flex-col gap-2">
            <h1 className="text-[--primary]">10 K+</h1>
            <p>Year of experience</p>
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="text-[--primary]">10 K+</h1>
            <p>Year of experience</p>
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="text-[--primary]">10 K+</h1>
            <p>Year of experience</p>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center md:justify-end image-container md:flex-1">
        <Image
          src="/statue2.png"
          alt="About Image"
          height={500}
          width={500}
          className="object-contain about-img"
        />
      </div>
    </div>
  );
};

export default AboutPage;
