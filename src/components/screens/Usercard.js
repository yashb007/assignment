import React,{useEffect} from 'react';
function Usercard(props){
  useEffect(()=>{
    console.log(props.detail)
  },[])
    return(
        <>
        <div className="container ">
      
            <div class="card ">
              <div class="card-stacked">
                <div class="card-content">
         
                <div className="row">
                <div className="col s12 m6 ">
                <h6><b>Name :- </b>{props.detail.name}</h6>
                 <h6><b>Username :-</b> {props.detail.username}</h6>
                 <h6><b>E-mail :-</b> {props.detail.email}</h6>
                 <h6><b>Phone No :-</b> {props.detail.phone}</h6>
                </div>
                
                <div className="col s12 m6 ">
                <h6><b>Website :-</b> <a href={props.detail.website}> {props.detail.website} </a></h6>
                <h6><b>Street :- </b> {props.detail.address.street} </h6>
                <h6><b>City :-</b>  {props.detail.website} </h6>
                <h6><b>Company :-</b>  {props.detail.website} </h6>
                </div>
                </div>
                </div>
              </div>
            </div>
          </div>
        
                  
        
        </>
    )
}

export default Usercard;