/* eslint-disable react/no-array-index-key */
import React from 'react';
import Link from 'next/link';

const tags = [
  'covid-19',
  'stayhome',
  'bitcoin',
  'coronavirus',
  'donaldtrump',
];

const TagLink = (props) => (
  <Link href="/t/[id]" as={`/t/${props.id}`}>
    <a className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#{props.id}</a>
  </Link>
);

const HashTag = () => (
  <div className="px-6 py-4">
    {tags.map((tag, index) => (<TagLink key={`key ${index}`} id={tag} />))}
  </div>
);

export default HashTag;
