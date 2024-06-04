import Header from "./components/Header";
import Footer from "./components/Footer";
import Homepage from "./pages/Homepage";
import DogsPage from "./pages/DogsPage";
import ContactPage from "./pages/ContactPage";
import ScrollTop from "./components/ScrollTop";
import './App.css'

import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client"
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
// initialize apollo client
const client = new ApolloClient({
  uri: 'http://localhost:1337/graphql',
  cache: new InMemoryCache()
})



function App() {

  return (
    <BrowserRouter>
      <ApolloProvider client={client}>
      <ScrollTop />
          <div> 
            <Header />
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="dogs" element={<DogsPage />} />
              <Route path="contact" element={<ContactPage />} />
            </Routes>
            <Footer />
          </div>
      </ApolloProvider>
    </BrowserRouter>
  );
}
export default App;