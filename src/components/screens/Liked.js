import React , {useState , useEffect}from 'react';
import Selected from './SelectedPost' 
import M from 'materialize-css'
function Liked(){
    const [post , setPost] = useState();
    const [id,setId] = useState();
    useEffect(()=>{
       M.AutoInit();

       setPost(JSON.parse(localStorage.getItem('like')))
  console.log(post)
    })
    return(
        <>
        <h2 className="center-align"> All Liked Posts </h2>
      
       
        <div>
        { post ? post.map(item => {
              return(
                  <Selected title={item.title} body={item.body} userId={item.userId} /> 
              )
          }) : <div className="center-align" style={{marginTop:"130px"}}>
          
                <h3>No posts are available</h3>

                <img src="https://img.icons8.com/cotton/64/000000/new-post.png"/>

          </div>}
          </div>
  

        
        </>
    )
}

export default Liked;