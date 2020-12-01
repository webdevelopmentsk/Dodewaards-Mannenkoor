import {content} from './data/content';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
//style
import './style/main.scss'

import LandingPage from './pages/LandingPage';
import Navigation from './components/Navigation';
import Agenda from './pages/Agenda';
import Contact from './pages/Contact';
import BecomeMember from './pages/BecomeMember';
import Sponser from './pages/Sponser';
import Activities from './pages/Activities';
import Introduction from './pages/Introduction';
import Footer from './components/Footer';
const App = () => {

  return (
    <BrowserRouter>
    <div className ="app">
      <Navigation />
        <Switch>
          <Route 
          exact path = {content.routes[0].link} 
          component ={LandingPage}
          />
          <Route 
          exact path = {content.routes[1].link} 
          component ={Introduction}
          />
          <Route 
          exact path = {content.routes[2].link} 
          component ={Agenda}
          />
          <Route 
          exact path = {content.routes[3].link} 
          component ={Activities}
          />
          <Route 
          exact path = {content.routes[4].link} 
          component ={BecomeMember}
          />
          <Route 
          exact path = {content.routes[5].link} 
          component ={Sponser}
          />
          <Route 
          exact path = {content.routes[6].link} 
          component ={Contact}
          />
        </Switch>
    </div>
    </BrowserRouter>
  );
};

export default App;