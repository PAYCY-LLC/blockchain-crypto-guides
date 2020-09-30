import React from 'react'
import Head from 'next/head'

export default function Meta() {
  return (
    <Head>
      <title>Litrex Academy</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#000000" />
      <meta name="description" content="Master fundamentals and learn about crypto projects in simple terms" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta httpEquiv="Content-Type" content="text/html; charset=ISO-8859-1" />

      <link rel="shortcut icon" href="/favicon/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
      <link rel="manifest" href="/favicon/manifest.json" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans&family=Noto+Sans&display=swap" />
      <script src="https://cdn.jsdelivr.net/npm/jquery@3.4.1/dist/jquery.min.js" />
      <script dangerouslySetInnerHTML={{ __html: mlScript() }} />
    </Head>
  )
}

function mlScript() {
  return (
    'function onSuccess(id) {' +
    '  $(`#mlb2-${id} .Contact-success`).show();' +
    '  $(`#mlb2-${id} .Contact-form`).hide();' +
    '}\n' +
    'function ml_webform_success_2166978() {' +
    '  onSuccess(2166978)' +
    '}\n' +
    'function ml_webform_success_1561498() {' +
    '  onSuccess(1561498)' +
    '}'
  )
}
