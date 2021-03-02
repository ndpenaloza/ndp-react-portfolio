import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Header from './components/Header';

function App() {
  return (
    <Router>
      <div>
        <Header/>
        <Switch>
          <Route exact path='/'>
            <Home/>
          </Route>
          <Route exact path='/portfolio'>
            <Portfolio/>
          </Route>
          <Route exact path='/contact'>
            <Contact/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
