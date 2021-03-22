import React , {useState,useEffect} from 'react';
import {Link, useHistory} from 'react-router-dom';

import M from 'materialize-css'


function Postcard(props){

const [flag , setFlag] = useState(0);
const [post , setPost] = useState();

useEffect(() => {
    setPost(props)
}, [])

const updatePost = () => {
   console.log(post)
   document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.modal');
    var instance = M.Modal.init(elems, {});
  instance.open()

  });
}
const deletePost = () => {
  console.log(post)
  fetch('https://jsonplaceholder.typicode.com/posts/1', {
  method: 'DELETE',
}).then(del => console.log("deleted"))
}

const likePost = () =>{
   console.log("like");
   var store = []
   if(localStorage.getItem('like') != null){
   store = JSON.parse(localStorage.getItem('like'));
   }
   const  Post = {
     title : props.title,
     body : props.body
   }

   console.log(store)
   store.push(Post)
   localStorage.setItem("like",JSON.stringify(store))
}


const dislikePost = () =>{
  console.log("dislike");
   var store = []
   if(localStorage.getItem('dislike') != null){
   store = JSON.parse(localStorage.getItem('dislike'));
   }
   const  Post = {
     title : props.title,
     body : props.body
   }
   console.log(store)
   store.push(Post)
   localStorage.setItem("dislike",JSON.stringify(store))
}

    return(
    <div className="container">
<div class="col s12 m12">
<div class="card horizontal">
  <div class="card-stacked">
    <div class="card-content">
<bold>  <h4 className="card-title">{props.title}</h4></bold>

      <p>{props.body}</p>
    </div>
    <div class="card-action">
    <i className="material-icons " onClick={()=> likePost()} style={{marginLeft:"7px",cursor:"pointer",onclick:"disable"}}>thumb_up</i>
    <i className="material-icons" onClick={()=>dislikePost()} style={{marginLeft:"7px",cursor:"pointer"}}>thumb_down</i>
    <button className="btn modal-trigger waves-effect waves-light #1e88e5 blue darken-1 right" style={{marginLeft:"7px"}} data-target={`modal${props.i}`} onClick={()=>updatePost()}>  Update 

    </button>
    <button className="btn modal-trigger waves-effect waves-light #1e88e5 red darken-1 right"  onClick={()=> deletePost()}>  Delete 

    </button>
    
      <div class="collapsible-body">
      <div className="container center-align" >
      <h2 className="">  update Post </h2>
      <br />
      <input 
      className="in"

      type='text'
      placeholder='title of the post'
      value={props.title}
    //  onChange={(e)=>setTitle(e.target.value) }
      style={{width:"70%",border:"2px solid #CAD5E2",borderRadius:"100px",paddingLeft:"18px"}}

      />
      <br />
      <br />
      
      <input 
      type='text'
      placeholder='userId'
      value={props.id}
    //  onChange={(e)=>setId(e.target.value)}
      style={{width:"70%",border:"2px solid #CAD5E2",borderRadius:"100px",paddingLeft:"18px"}}
     
      />
      <br />
      <br />

      <input 
      type='text'
      placeholder='Body of the post'
      value={props.body}
    //  onChange={(e)=>setBody(e.target.value)}
      style={{width:"70%",height:"130px",border:"2px solid #CAD5E2",borderRadius:"00px",paddingLeft:"18px",paddingTop:"0"}}
      
      />

      <br />
      <br />
      <button type="button" class="btn btn-outline-success" style={{borderRadius:"30px",width:"150px",height:"50px",fontSize:"25px"}} onClick = {()=>updatePost()}>Submit</button>

      </div>  
      
    </div>
  </div>
</div>
</div>

</div>
</div>
    )

  
}

export default Postcard;