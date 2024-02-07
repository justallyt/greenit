import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client"

const client = new ApolloClient({
     uri: 'https://us-east-1-shared-usea1-02.cdn.hygraph.com/content/clrzoyx2d1zwq01ut6o002rr7/master',
     cache: new InMemoryCache()
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
             <BrowserRouter>
                     <ApolloProvider client={client}>
                             <App />
                     </ApolloProvider>
             </BrowserRouter>
  </React.StrictMode>,
)
