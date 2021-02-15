import { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import Container from './components/Container/Container';
import AppBar from './components/AppBar/AppBar';
import Footer from './components/AboutUs/Footer';

const AboutUs = lazy(() =>
  import('./components/AboutUs/AboutUs' /* webpackChunkName: "AboutUs" */),
);
const OurCompanies = lazy(() =>
  import(
    './components/OurCompanies/OurCompanies' /* webpackChunkName: "OurCompanies" */
  ),
);

const ItalTech = lazy(() =>
  import(
    './components/Companies/ItalTechnology/ItalTechnology' /* webpackChunkName: "ItalTechnology" */
  ),
);
const AtlasCorp = lazy(() =>
  import(
    './components/Companies/AtlasCorporation/AtlasCorporation' /* webpackChunkName: "AtlasCorporation"*/
  ),
);
const AtlasPol = lazy(() =>
  import(
    './components/Companies/AtlasPolska/AtlasPolska' /* webpackChunkName: "AtlasPolska" */
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

          <Route path="/our-companies/ital-technology">
            <ItalTech />
          </Route>

          <Route path="/our-companies/atlas-corporation">
            <AtlasCorp />
          </Route>

          <Route path="/our-companies/atlas-polska">
            <AtlasPol />
          </Route>
        </Switch>
      </Suspense>

      <Footer />
    </Container>
  );
}

export default App;
