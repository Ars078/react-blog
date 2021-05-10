import { BrowserRouter as Router, Route, Switch, } from 'react-router-dom';
import './App.css';
import {BlogPage } from './containers/BlogPage/BlogPage';
import { Footer } from './components/Fotter/Footer';
import { Header } from './components/Header/Header';
import { LoginPage } from './containers/LoginPage/LoginPage';

export function App() {
  return (
    <Router>
    <div className="App">

      <Header />

      <main>
      <Switch>
        <Route exact path='/' component={BlogPage}/>
        <Route exact path='/login' component={LoginPage}/>
      </Switch>
      </main>

      <Footer
      year={new Date().getFullYear()}
      />
      
    </div>
    </Router>
  );
}

