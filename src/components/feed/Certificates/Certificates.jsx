import React from 'react'
import { useSelector } from 'react-redux'
import data from "../../../data.json"
import DownloadIcon from '@mui/icons-material/Download';

const Certificates = () => {
  const theme=useSelector(state=>state.theme.theme)
  return (
    <>
    
    {data.certificates.map(item=>{

return(
  <div class="card mb-3" 
  style={{
     backgroundColor: theme==="dark"?"#272728":"white",
     color:theme==="dark"? "white": 'black',
 }}
>
 <div class="row g-0 position-relative align-items-center" style={{paddingLeft:"7px"}}>
     <div class="col-1" >
     <img src={`./icons/${item.image}`} class="img-fluid"  style={{borderRadius:"50px"}} alt={item.title}/>
     </div>
     <div class="col-11">
     <div class="card-body">
         <h6 class="card-title d-inline">{item.organization}</h6><small style={{marginLeft:"10px"}}>{item.jobTitle}</small>
         <p class="card-text">{item.discription}</p>
         <a href={`./certificates/${item.certificate}`} download={`${item.organization}`} style={{textDecoration:"none",display:"inline-block",float:"right",marginBottom:"20px"}}>
                    <button style={{
                        height:"40px",
                        // width:"220px",
                        borderRadius:"8px",
                        backgroundColor: theme==="dark" ? '#272728' : 'rgb(116, 53, 199)',
                        color:"white",
                        display:"flex",
                        justifyContent:"center",
                        alignItems:"center",
                    }}>
                    <DownloadIcon
                      style={{
                        marginRight:"10px",
                        color: theme==="dark" ? '#d2b660' : 'white'
                        }}>
                    </DownloadIcon>Download Certificate</button>
                  </a>
     </div>
     </div>
 </div>
</div>

)
})}
    
    
    </>
   
  )
}

export default Certificates