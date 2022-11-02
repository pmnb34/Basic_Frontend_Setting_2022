import { ApolloProvider } from '@apollo/client';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { client } from './apollo';
import { routes } from './routes';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Switch>
          <Route path={routes.home} exact>
              <Layout>
                  <Home />
              </Layout>
          </Route>
          <Route path={routes.signUp} exact></Route>
        </Switch>
      </Router>
    </ApolloProvider>
  );
}

export default App;
