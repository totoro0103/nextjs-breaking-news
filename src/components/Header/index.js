import React from 'react';
import Link from 'next/link';

export default function Header() {
  return (
    <header>
      <nav className="flex items-center justify-between flex-wrap bg-black p-6">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <a className="font-semibold text-xl tracking-tight " href="/">Breaking News</a>
        </div>
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div className="text-sm lg:flex-grow">
            <Link href="/sources" as="/sources">
              <a className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                Sources
              </a>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
