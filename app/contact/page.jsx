import Image from 'next/image';

const imageData = [
  {
    src: '/Image 01.png',
    alt: 'Statue for Contact Page 01',
    span: 'row-span-8',
  },
  {
    src: '/Image 02.png',
    alt: 'Statue for Contact Page 02',
    span: 'row-span-6',
  },
  {
    src: '/Image 03.png',
    alt: 'Statue for Contact Page 03',
    span: 'row-span-4',
  },
  {
    src: '/Image 06.png',
    alt: 'Statue for Contact Page 06',
    span: 'row-span-3',
  },
  {
    src: '/Image 05.png',
    alt: 'Statue for Contact Page 05',
    span: 'row-span-6',
  },
  {
    src: '/Image 07.png',
    alt: 'Statue for Contact Page 07',
    span: 'row-span-5',
  },
  {
    src: '/Image 04.png',
    alt: 'Statue for Contact Page 04',
    span: 'row-span-4',
  },
];

const ImageGrid = () => (
  <div className="grid grid-cols-3 gap-2 grid-rows-12 h-[50vh] sm:h-[70vh] w-full">
    {imageData.map((img, index) => (
      <div key={index} className={`relative col-span-1 ${img.span}`}>
        <Image
          src={img.src}
          alt={img.alt}
          layout="fill"
          className="object-cover"
        />
      </div>
    ))}
  </div>
);

const ContactForm = () => (
  <form action="" className="flex flex-col gap-5">
    <input className="input" type="text" placeholder="Name and Surname" />
    <input className="input" type="text" placeholder="Email Address" />
    <input
      className="input"
      type="text"
      placeholder="Phone Number (Optional)"
    />
    <textarea
      className="text-area"
      cols={30}
      rows={7}
      placeholder="Message"
    ></textarea>
    <button className="bg-[--secondary] button">Send</button>
  </form>
);

const ContactPage = () => {
  return (
    <div className="flex flex-col content-container md:flex-row">
      <div className="image-container md:flex-1">
        <ImageGrid />
      </div>

      <div className="w-full md:flex-1 form-container">
        <ContactForm />
      </div>
    </div>
  );
};

export default ContactPage;
