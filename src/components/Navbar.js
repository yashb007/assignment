import { Container } from '@material-ui/core';
import React,{useEffect} from 'react';
import {Link} from 'react-router-dom';
import './css/NavBar.css'
import M from 'materialize-css'
function Navbar(){
  useEffect(()=>{
    M.AutoInit()

  },[])
    return(
        <>
        <nav>
    <div class="nav-wrapper">
    <Container>
      <Link to="/" class="brand-logo "  >Testing Blog</Link>
      </Container>
      <Link  data-target="mobile-demo" className="right sidenav-trigger"><i class="material-icons">menu</i></Link>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li><Link to='/create'>Create Post</Link></li>
        <li><Link to='/user'>Users</Link></li> 
         <li><Link to='/liked'>Liked Posts</Link></li>
         <li><Link to='/disliked'>Disliked Posts</Link></li>
      </ul>
    </div>
  </nav>

  <ul className="sidenav" id= "mobile-demo">
  <li><Link to='/create'>Create Post</Link></li>
  <li><Link to='/user'>Users</Link></li>
  <li><Link to='/liked'>Liked Posts</Link></li>
  <li><Link to='/disliked'>Disliked Posts</Link></li>
</ul>
  </>
    )
}

export default Navbar;