import logo from './logo.svg';
import AboutPage from './AboutPage';
import ContactPage from './ContactPage';
import LoginPage from './LoginPage';
import HomePage from './HomePage';
import {Switch, Route,Link} from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-head">
      <nav> 
         <Link to="/">Home</Link>
         <Link to="/AboutPage">About</Link>
         <Link to="/ContactPage">Contact</Link>
         <Link to="LoginPage">Login</Link>
       </nav>
      </header>

      <Switch>

      
      <Route path="/AboutPage">
        <AboutPage/>
      </Route>
      <Route path="/ContactPage">
        <ContactPage/>
      </Route>
      <Route path="LoginPage">
        <LoginPage/>
      </Route>

      <Route path="/">
        <HomePage/>
      </Route>
     </Switch>
    </div>
  );
}

export default App;
