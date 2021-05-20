import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import FrontPage from './components/FrontPage/FrontPage'
import Reference from './components/References/References'
import Navigation from './components/Navigation/Navigation'
import Containers from './components/FrontPage/Containers'
import Footer from './components/Footer/Footer'
import user from './data/user'
import ProgressBar from 'react-bootstrap/ProgressBar'

function App() {

  return (
    <Router>
      <div className="App">
        <Navigation />

        <Switch>
          <Route path="/" exact component={FrontPage} />
          <Route path="/references" exact component={Reference} />
          <Route path="/experiences" exact component={Containers} />
        </Switch>
        <Footer links={user.links} />
      </div>
    </Router>
  );
}

export default App;
