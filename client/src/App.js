import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Index from './pages/Index';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div>
          <Switch>
            <Route exact path='/' component={Index}/>
            <Route exact path='/portfolio' component ={Portfolio}/>
            <Route exact path='/contact' component={Contact}/>
          </Switch>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
