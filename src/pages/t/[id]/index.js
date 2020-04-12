import React from 'react';
import fetch from 'isomorphic-unfetch';
import Layout from '../../../components/Layout';
import Articles from '../../../components/Articles';
import { API_KEY } from '../../../config';
import HashTag from '../../../components/HashTag';

function TagPage({ articles }) {
  return (
    <Layout>
      <HashTag />
      <Articles articles={articles} />
    </Layout>
  );
}

TagPage.getInitialProps = async (query) => {
  const res = await fetch(`https://newsapi.org/v2/everything?q=${query.query.id}&apiKey=${API_KEY}`);
  const data = await res.json();
  return {
    articles: data.articles,
  };
};
export default TagPage;
