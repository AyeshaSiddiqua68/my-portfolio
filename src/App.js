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
import Contact from './components/Contact/Contact';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Project from './components/Project/Project';
import Projects from './components/Projects/Projects';


function App() {
  return (
    <Router>
      <Navbar />
      <Switch>

        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/home">
          <Home />
        </Route>
        <Route path="/projects">
          <Projects></Projects>
        </Route>
        <Route path="/project/:projectId">
          <Project></Project>
        </Route>
        <Route path="/about">
          <AboutMe />
        </Route>
        <Route path="/blog">
          <Blog />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
      </Switch>
      <Footer></Footer>
    </Router>

  );
}

export default App;

