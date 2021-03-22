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
      <div className="container center-align" >
        <h2 className=""> Create a Post </h2>
        <br />
        <input 
        className="in"

        type='text'
        placeholder='title of the post'
        value={title}
        onChange={(e)=>setTitle(e.target.value) }
        style={{width:"70%",border:"2px solid #CAD5E2",borderRadius:"100px",paddingLeft:"18px"}}

        />
        <br />
        <br />
        
        <input 
        type='text'
        placeholder='userId'
        value={id}
        onChange={(e)=>setId(e.target.value)}
        style={{width:"70%",border:"2px solid #CAD5E2",borderRadius:"100px",paddingLeft:"18px"}}
       
        />
        <br />
        <br />

        <input 
        type='text'
        placeholder='Body of the post'
        value={body}
        onChange={(e)=>setBody(e.target.value)}
        style={{width:"70%",height:"130px",border:"2px solid #CAD5E2",borderRadius:"00px",paddingLeft:"18px",paddingTop:"0"}}
        
        />

        <br />
        <br />
        <button type="button" class="btn btn-outline-success" style={{borderRadius:"30px",width:"150px",height:"50px",fontSize:"25px"}} onClick = {()=>CreatePost()}>Submit</button>

        </div>
        </>
    )
}

export default CreatePost;