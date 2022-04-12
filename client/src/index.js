import { ApolloClient, ApolloProvider } from '@apollo/client'
import { cache } from './cache'

import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

import Content from './content/content'

import reportWebVitals from './reportWebVitals'

const client = new ApolloClient({
  cache,
  uri: 'http://localhost:4000/graphql'
})

ReactDOM
  .createRoot(document.getElementById('root'))
  .render(
    <ApolloProvider client={client}>
      <React.StrictMode>
        <Content />
      </React.StrictMode>
    </ApolloProvider>
  )
reportWebVitals()