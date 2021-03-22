import React , {useState,useEffect} from 'react';
import {Link, useHistory} from 'react-router-dom';



function Selected(props){

const [flag , setFlag] = useState(0);
const [post , setPost] = useState();

useEffect(() => {
    setPost(props)
}, [])

    return(
    <div className="container ">
<div class="col s12 m12">
<div class="card horizontal">
  <div class="card-stacked">
    <div class="card-content">
<bold>  <h4 className="card-title">{props.title}</h4></bold>

      <p>{props.body}</p>
      
    </div>
  </div>
</div>
</div>

</div>
    )

  
}

export default Selected;