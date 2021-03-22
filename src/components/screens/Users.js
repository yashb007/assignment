import React , {useState , useEffect} from 'react';
import Usercard from './Usercard';
import M from 'materialize-css'
function User(){
   const [user , setUser] = useState();
   useEffect(()=>{
      M.AutoInit();
      fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json())
        .then(result => {
          setUser(result)
         // console.log(user)
        })
   },[])
    return(
        <>
        <h2 className="center-align"> All Users </h2>
<div>
      { user ? user.map(item => {
            return(
                <Usercard detail={item} /> 
            )
        }) :  <div className="center-align" style={{marginTop:"30px"}}><div class="preloader-wrapper big active">
        <div class="spinner-layer spinner-blue-only">
          <div class="circle-clipper left">
            <div class="circle"></div>
          </div><div class="gap-patch">
            <div class="circle"></div>
          </div><div class="circle-clipper right">
            <div class="circle"></div>
          </div>
        </div>
      </div></div>}
        </div>
        </>
    )
}

export default User;