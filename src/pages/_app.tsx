import * as React from 'react'
import App from 'next/app'
import Head from 'next/head'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import 'react-circular-progressbar/dist/styles.css'
import { theme, GlobalStyle, ThemeProvider } from '@components/foundations'

config.autoAddCss = false

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <>
        <Head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <title>Sylvester Abeng</title>
          <link
            href="https://fonts.googleapis.com/css2?family=Bellefair&family=Noto+Serif+JP:wght@300;400;500;700&display=swap"
            rel="stylesheet"
          />
          <link rel="icon" href="/images/favicon.ico" />
        </Head>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Component {...pageProps} />
        </ThemeProvider>
      </>
    )
  }
}
