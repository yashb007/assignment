import React , {useState , useEffect}from 'react';
import {Link, useHistory} from 'react-router-dom';
import '../css/Create.css'
import M from 'materialize-css'
function CreatePost(){
    const history = useHistory()
    const [title , setTitle] = useState();
    const [body, setBody] = useState();
    const [id , setId] = useState();
    CreatePost = ()=>{
       M.AutoInit();
       fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
          title: 'foo',
          body: 'bar',
          userId: 1,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((response) => response.json())
        .then((json) => {console.log(json)
            history.push('/')
        })
        ;
    }

    return(
        <>
      <div className="container" >
        <h2 className="center-align"> Update Post </h2>
        
        <input 
        type='text'
        placeholder='title'
        value={title}
        onChange={(e)=>setTitle(e.target.value)}
        />
        
        <input 
        type='text'
        placeholder='userId'
        value={id}
        onChange={(e)=>setId(e.target.value)}
        />

        <textarea id="textarea1" class="materialize-textarea" placeholder="Body" value={body}  onChange={(e)=>setBody(e.target.value)}></textarea>
        
        <button type="button" class="btn btn-outline-success" >  Update  </button> 

        </div>
        </>
    )
}

export default CreatePost;