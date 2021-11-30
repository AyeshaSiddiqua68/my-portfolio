import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import Home from './components/Home/Home';
import AboutMe from './components/AboutMe/AboutMe';
import Blog from './components/Blog/Blog';

function App() {
  return (
    <Router>
      <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <AboutMe/>
          </Route>
          <Route path="/blog">
            <Blog/>
          </Route>
        </Switch>
    </Router>
    
  );
}

export default App;
