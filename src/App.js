import React, { useEffect , createContext,useReducer,useContext} from 'react';
import Navbar from "./components/Navbar";
import {BrowserRouter, Route, Switch, useHistory} from 'react-router-dom';
import Home from './components/screens/Home';
import User from './components/screens/Users';
import CreatePost from './components/screens/CreatePost';
import Update from './components/screens/Update';
import Liked from './components/screens/Liked';
import Disliked from './components/screens/Disliked';

const Routing = () => {
 
  return (
    <Switch>
    <Route exact path='/'> <Home /> </Route>
    <Route  path='/user'> <User /> </Route>
    <Route  path='/create'> <CreatePost /> </Route>
    <Route  path='/update'> <Update /> </Route>
    <Route  path='/liked'> <Liked /> </Route>
    <Route  path='/disliked'> <Disliked /> </Route>
     
     </Switch>
     )
}

function App() {
  
  return (
    <BrowserRouter>
    <Navbar />
     <Routing />
    </BrowserRouter>
  );
}

export default App;