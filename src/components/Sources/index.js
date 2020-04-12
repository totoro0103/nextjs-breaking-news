import React from 'react';
import Link from 'next/link';

const Sources = (props) => {
  const { sources } = props;

  return (
    <div>
      {
      sources.map((item) => (
        <div>
          <div className="mt-2">
            <Link href="/source/[id]" as={`/source/${item.id}`}>
              <a className="text-1xl text-gray-700 font-bold hover:text-gray-600">{item.name}</a>
            </Link>
          </div>
          <p className="text-xs text-gray-500">{item.description}</p>
        </div>
      ))
      }
    </div>
  );
};


export default Sources;
