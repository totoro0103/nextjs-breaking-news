import React from 'react';
import fetch from 'isomorphic-unfetch';
import Layout from '../../../components/Layout';
import Articles from '../../../components/Articles';
import { API_KEY } from '../../../config';

function SourcePage({ articles }) {
  return (
    <Layout>
      <Articles articles={articles} />
    </Layout>
  );
}

SourcePage.getInitialProps = async (query) => {
  const res = await fetch(`https://newsapi.org/v2/top-headlines?sources=${query.query.id}&apiKey=${API_KEY}`);
  const data = await res.json();
  return {
    articles: data.articles,
  };
};
export default SourcePage;
