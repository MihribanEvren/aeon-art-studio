import Link from 'next/link';
import Links from './links/Links';

const Navbar = () => {
  return (
    <div className="flex-between min-h-24">
      <Link className="text-30-bold" href="/">
        Aeon
      </Link>
      <div className="flex-1 flex-between">
        <Links />
      </div>
    </div>
  );
};

export default Navbar;
