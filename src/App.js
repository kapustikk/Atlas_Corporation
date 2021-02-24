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

const Services = lazy(() =>
  import(
    './components/OurServices/Services' /* webpackChunkName: "Services" */
  ),
);

const Supervision = lazy(() =>
  import(
    './components/OurServices/Supervision' /* webpackChunkName: "Supervision" */
  ),
);

const Construction = lazy(() =>
  import(
    './components/OurServices/Construction' /* webpackChunkName: "Construction" */
  ),
);

const AfterSalesService = lazy(() =>
  import(
    './components/OurServices/AfterSalesService' /* webpackChunkName: "AfterSalesService" */
  ),
);

const LogisticSupport = lazy(() =>
  import(
    './components/OurServices/LogisticSupport' /* webpackChunkName: "LogisticSupport" */
  ),
);

const Assembly = lazy(() =>
  import(
    './components/OurServices/Assembly' /* webpackChunkName: "Assembly" */
  ),
);

const StartUp = lazy(() =>
  import('./components/OurServices/StartUp' /* webpackChunkName: "StartUp" */),
);

const Projects = lazy(() =>
  import(
    './components/OurProjects/AllProjects' /* webpackChunkName: "Projects" */
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

          <Route path="/services" exact>
            <Services />
          </Route>

          <Route path="/services/supervision">
            <Supervision />
          </Route>

          <Route path="/services/construction">
            <Construction />
          </Route>

          <Route path="/services/after-sales">
            <AfterSalesService />
          </Route>

          <Route path="/services/logistic-support">
            <LogisticSupport />
          </Route>

          <Route path="/services/assembly">
            <Assembly />
          </Route>

          <Route path="/services/commissioning-and-start-up">
            <StartUp />
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

          <Route path="/projects" exact>
            <Projects />
          </Route>
        </Switch>
      </Suspense>

      <Footer />
    </Container>
  );
}

export default App;
