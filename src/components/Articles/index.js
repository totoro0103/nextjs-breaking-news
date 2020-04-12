/* eslint-disable react/no-array-index-key */
import React from 'react';

export default function Articles(props) {
  const { articles } = props;
  return (
    <div>
      {
      articles.map((item, index) => (
        <div key={`id${index}`} className="max-w-4xl px-10 my-4 py-6 bg-white rounded-lg shadow-md">
          <div className="flex justify-between items-center">
            <span className="font-light text-gray-600">{(new Date(item.publishedAt)).toDateString()}</span>
            <p className="px-2 py-1 bg-green-600 text-gray-100 font-bold">{item.source.name}</p>
          </div>
          <div className="mt-2">
            <p className="text-2xl text-gray-700 font-bold" href="#">{item.title}</p>
            <p className="mt-2 text-gray-600">{item.content}</p>
          </div>
          <div className="flex justify-between items-center mt-4">
            <a className="text-blue-600 hover:underline" href={item.url}>Read more</a>
          </div>
        </div>
      ))
      }
    </div>
  );
}
