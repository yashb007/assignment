import React , {useState , useEffect}from 'react';
import Postcard from './Postcard'

import M from 'materialize-css'
function Home(){
    const [post , setPost] = useState();
    const [id,setId] = useState();
    useEffect(()=>{
       M.AutoInit();
       if(!id){
       fetch('https://jsonplaceholder.typicode.com/posts').then(res => res.json())
         .then(result => {
           setPost(result)
         })
        }
    },[])
    const searchById = () =>{
      fetch('https://jsonplaceholder.typicode.com/posts?userId='+id)
      .then((response) => response.json())
      .then((json) => {console.log(json)
          setPost(json);
      });
    }
    return(
        <>
        <h2 className="center-align"> All Blogs </h2>
      
        <div className="center-align container row" style={{padding:"15px"}}>
        <h5 > Search Post By User ID  </h5>
        <input
        value={id} placeholder="user Id"  onChange={(e)=>setId(e.target.value)}
         style={{width:"200px",border: "1px solid #707070",borderRadius:"100px",paddingLeft: "8px",paddingRight: "8px",background: "#FFFFFF "}}  />
    <button className="btn waves-effect waves-light #1e88e5 green darken-1 " 
    onClick={()=>searchById()}
    style={{margin:"20px",width:"100px",border: "1px solid #707070",borderRadius:"100px"}}>   
       Search    
    </button>
        </div>

        <div>
        { post ? post.map((item,i) => {
              return(
                  <Postcard title={item.title} body={item.body} userId={item.userId} no={i} /> 
              )
          }) : <div className="center-align" style={{marginTop:"30px"}}><div class="preloader-wrapper big active">
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

export default Home;