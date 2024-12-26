import Image from 'next/image';
import Link from 'next/link';

function PostCard() {
  return (
    <div className="flex flex-col gap-5 p-4 bg-[rgba(255,255,255,0.07)] rounded-lg">
      <div className="relative flex flex-row top">
        <div className="w-full h-64">
          <Image
            src="https://images.pexels.com/photos/29879483/pexels-photo-29879483/free-photo-of-karussell-aus-holz-weihnachtsdekoration.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="post"
            fill
            className="object-cover rounded-lg"
          />
        </div>
        <span className="absolute m-auto -rotate-90 top-1/2 -right-10 text-white-small">
          26.12.2024
        </span>
      </div>
      <div className="bottom">
        <h1>Title</h1>
        <p>Description</p>
        <Link href="/blog/post">READ MORE</Link>
      </div>
    </div>
  );
}

export default PostCard;
