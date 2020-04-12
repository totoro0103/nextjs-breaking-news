/* eslint-disable react/react-in-jsx-scope */
import Document, {
  Html, Head, Main, NextScript,
} from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="shortcut icon" type="image/x-icon" href="/static/favicon.ico" />
          <meta property="og:title" content="Breaking News" />
          <meta property="og:type" content="article" />
          <meta property="og:image" content="https://media4.s-nbcnews.com/j/newscms/2019_01/2705191/nbc-social-default_b6fa4fef0d31ca7e8bc7ff6d117ca9f4.nbcnews-fp-1200-630.png" />
          <meta property="og:image:width" content="600" />
          <meta property="og:image:height" content="314" />
          <meta property="og:description" content="Go to nextjs-breaking-news.now.sh for breaking news, videos, and the latest top stories in world news, business, politics, health and pop culture." />
          <meta property="og:site_name" content="Breaking News" />
          <meta property="fb:app_id" content="197234495060723" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Breaking News" />
          <meta
            name="twitter:image"
            content="https://media4.s-nbcnews.com/j/newscms/2019_01/2705191/nbc-social-default_b6fa4fef0d31ca7e8bc7ff6d117ca9f4.nbcnews-fp-1200-630.png"
          />
          <meta
            name="twitter:description"
            content="Go to nextjs-breaking-news.now.sh for breaking news, videos, and the latest top stories in world news, business, politics, health and pop culture."
          />

        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
