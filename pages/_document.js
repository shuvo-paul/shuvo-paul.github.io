import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
            <link rel="icon" href="/favicon.ico" />
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
            <link href="https://fonts.googleapis.com/css2?family=Bree+Serif&family=Chivo:wght@300;400;700&display=swap" rel="stylesheet" />
        </Head>
        <body className='font-body bg-secondary-500'>
          <input type="checkbox" id="mobile-nav-checkbox" />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument