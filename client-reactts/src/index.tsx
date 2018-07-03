import CssBaseline from '@material-ui/core/CssBaseline'
import { MuiThemeProvider } from '@material-ui/core/styles'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import * as React from 'react'
import { ApolloProvider } from 'react-apollo'
import { render } from 'react-dom'

import App from './components/App'
import registerServiceWorker from './registerServiceWorker'
import customTheme from './theme'

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({ uri: 'http://localhost:4000' }),
})

const hookEl = document.getElementById('root') as HTMLElement

const RootTree = (
  <MuiThemeProvider theme={customTheme}>
    <ApolloProvider client={client}>
      <>
        <CssBaseline />
        <App />
      </>
    </ApolloProvider>
  </MuiThemeProvider>
)

render(RootTree, hookEl)
registerServiceWorker()
