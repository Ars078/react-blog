import { BrowserRouter as Router, Route, Switch, } from 'react-router-dom';
import './App.css';
import {BlogPage } from './containers/BlogPage/BlogPage';
import { Footer } from './components/Fotter/Footer';
import { Header } from './components/Header/Header';
import { LoginPage } from './containers/LoginPage/LoginPage';
import { useState } from 'react';

export function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('isLoggedIn') === 'true')
  const [userName, setUserName] = useState(localStorage.getItem('userName'))
  
  return (
    <Router>
    <div className="App">

      <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} userName={userName}/>

      <main>
      <Switch>
        <Route exact path='/' component={BlogPage}/>
        <Route exact path='/login' 
        render={(props) => (
        <LoginPage {...props} setIsLoggedIn={setIsLoggedIn} setUserName={setUserName}/>
        )}
        />
      </Switch>
      </main>

      <Footer
      year={new Date().getFullYear()}
      />
      
    </div>
    </Router>
  );
}

