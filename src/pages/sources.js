import React, { useState } from 'react';
import fetch from 'isomorphic-unfetch';
import Layout from '../components/Layout';
import Sources from '../components/Sources';
import { API_KEY } from '../config';

function SourcesPage(props) {
  const [sources, setSources] = useState(props.sources);

  const handleSearchSources = (e) => {
    const query = e.target.value;
    const newSources = props.sources.filter((source) => source.name.toLowerCase()
      .includes(query.toLowerCase()));
    setSources(newSources);
  };

  return (
    <Layout>
      <input
        className="w-full rounded-md bg-gray-200 text-gray-700 leading-tight focus:outline-none py-2 px-2 mt-2 fixed"
        id="search"
        type="text"
        placeholder="Search..."
        onChange={handleSearchSources}
      />
      <Sources sources={sources} />
    </Layout>
  );
}

SourcesPage.getInitialProps = async () => {
  const res = await fetch(`https://newsapi.org/v2/sources?&apiKey=${API_KEY}`);
  const data = await res.json();
  return {
    sources: data.sources,
  };
};
export default SourcesPage;
