import './App.css';
import { HashRouter, Switch, Route } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Projects from './Pages/Projects';
import Blog from './Pages/Blog';
import Cv from './Pages/Cv';
import Apropos from './Pages/Apropos';
import Podcasts from './Pages/Podcasts';
import NotFound from './Pages/NotFound';

function App() {
  return (
    <div className="App">
        <HashRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route path="/projects" exact component={Projects} />
          <Route path="/blog" exact component={Blog} />
          <Route path="/podcasts" exact component={Podcasts} />
          <Route path="/cv" exact component={Cv} />
          <Route path="/apropos" exact component={Apropos} />
          <Route component={NotFound} />
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
