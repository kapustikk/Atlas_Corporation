import { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import Container from './components/Container/Container';
import AppBar from './components/AppBar/AppBar';

const AboutUs = lazy(() =>
  import('./components/AboutUs/AboutUs' /* webpackChunkName: "AboutUs" */),
);
const OurCompanies = lazy(() =>
  import(
    './components/OurCompanies/OurCompanies' /* webpackChunkName: "OurCompanies" */
  ),
);

function App() {
  return (
    <Container>
      <AppBar />

      <Suspense fallback={<h2>Loading...</h2>}>
        <Switch>
          <Route path="/" exact>
            <AboutUs />
          </Route>

          <Route path="/our-companies" exact>
            <OurCompanies />
          </Route>
        </Switch>
      </Suspense>
    </Container>
  );
}

export default App;
