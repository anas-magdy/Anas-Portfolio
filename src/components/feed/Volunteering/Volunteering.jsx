import React from 'react'
import { useSelector } from 'react-redux'
import data from "../../../data.json"
const Volunteering = () => {
  const theme=useSelector(state=>state.theme.theme)
  return (
    <div>
        
        
          {data.volunteering.map(item=>{

            return(
              <div class="card mb-3" 
              style={{
             
                 backgroundColor: theme==="dark"?"#272728":"white",
                 color:theme==="dark"? "white": 'black',
             }}
         >
             <div class="row g-0 position-relative align-items-center" style={{paddingLeft:"7px"}}>
                 <div class="col-1" >
                 <img src={"Photo.jpg"} class="img-fluid"  style={{borderRadius:"50px"}} alt={item.title}/>
                 </div>
                 <div class="col-11">
                 <div class="card-body">
                     <h6 class="card-title d-inline">{item.organization}</h6><small style={{marginLeft:"10px"}}>{item.jobTitle}</small>
                     <p class="card-text">{item.discription}</p>
                 </div>
                 </div>
             </div>
         </div>
 
            )
          })}
            
   

    </div>
  )
}

export default Volunteering