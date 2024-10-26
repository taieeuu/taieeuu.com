import React from 'react';
import Link from 'next/link';

function Navbar() {
  return (
    <nav className="flex justify-between items-center py-4 px-6 bg-black text-white">
      <div className="text-xl font-bold">
        <Link href="/" className="text-white">
          taieeuu.xyz
        </Link>
      </div>
      <ul className="flex space-x-6">
        <li><Link href="/" className="text-white hover:text-gray-300">Home</Link></li>
        <li><Link href="/posts" className="text-white hover:text-gray-300">Posts</Link></li>
        <li><Link href="/about" className="text-white hover:text-gray-300">About</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
