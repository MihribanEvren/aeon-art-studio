import Image from 'next/image';

const ContactPage = () => {
  return (
    <div>
      <div className="content-container">
        <div className="image-container md:flex-1">
          <div className="grid grid-cols-3 gap-2 grid-rows-12 h-[70vh] w-full">
            <div className="relative col-span-1 row-span-8">
              <Image
                src="/Image 01.png"
                alt="Statue for Contact Page"
                layout="fill"
                className="object-cover"
              />
            </div>

            <div className="relative col-span-1 row-span-6">
              <Image
                src="/Image 02.png"
                alt="Statue for Contact Page"
                layout="fill"
                className="object-cover"
              />
            </div>

            <div className="relative col-span-1 row-span-4">
              <Image
                src="/Image 03.png"
                alt="Statue for Contact Page"
                layout="fill"
                className="object-cover"
              />
            </div>

            <div className="relative col-span-1 row-span-3">
              <Image
                src="/Image 06.png"
                alt="Statue for Contact Page"
                layout="fill"
                className="object-cover"
              />
            </div>

            <div className="relative col-span-1 row-span-6">
              <Image
                src="/Image 05.png"
                alt="Statue for Contact Page"
                layout="fill"
                className="object-cover"
              />
            </div>

            <div className="relative col-span-1 row-span-5">
              <Image
                src="/Image 07.png"
                alt="Statue for Contact Page"
                layout="fill"
                className="object-cover"
              />
            </div>

            <div className="relative col-span-1 row-span-4">
              <Image
                src="/Image 04.png"
                alt="Statue for Contact Page"
                layout="fill"
                className="object-cover"
              />
            </div>
          </div>
        </div>

        <div className="md:flex-1"></div>
      </div>
    </div>
  );
};

export default ContactPage;
