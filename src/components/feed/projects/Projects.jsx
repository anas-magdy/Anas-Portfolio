import React from 'react'
import { useSelector } from 'react-redux'
import data from "../../../data.json"
import LinkIcon from '@mui/icons-material/Link';
const Projects = () => {
  const theme=useSelector(state=>state.theme.theme)
   return (
    <>

{data.projects.map(proj=>{
                return(

                    <div class="card mb-3" 
                    style={{
                   
                       backgroundColor: theme==="dark"?"#272728":"white",
                       color:theme==="dark"? "white": 'black',
                       fontSize:"15px"
                   }}
               >
                   <div class="row g-0">
                       <div class="col-xs-12 col-md-4" >
                       <img src={proj.image} class="img-fluid rounded-start h-100" width={"100%"} alt={proj.title}/>
                       </div>
                       <div class="col-md-8">
                       <div class="card-body">
                           <h5 class="card-title">{proj.title}</h5>
                           <p class="card-text">{proj.discription}</p>
                            <a 
                            href={proj.link}
                            target="_blank"
                            rel='noreferrer'
                            style={{
                                textDecoration:"none",
                                color: theme==="dark"? "white": 'black',
                            }}
                            >
                            <p class="card-text">Link <LinkIcon></LinkIcon></p></a>
                       </div>
                       </div>
                   </div>
               </div>
                )
            })}
    </>


  )
}

export default Projects