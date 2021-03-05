import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Index from './pages/Index';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div>
        <Header/>
          <Switch>
            <Route exact path='/'>
              <Index/>
            </Route>
            <Route exact path='/portfolio'>
              <Portfolio/>
            </Route>
            <Route exact path='/contact'>
              <Contact/>
            </Route>
          </Switch>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
