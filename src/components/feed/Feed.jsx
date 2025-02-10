import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { Stack } from '@mui/material';
import AboutMe from './AboutMe/AboutMe';
import Projects from './projects/Projects';
import Certificates from './Certificates/Certificates'
import Volunteering from './Volunteering/Volunteering';
const Feed = () => {
   const theme=useSelector(state=>state.theme.theme)
   const [isActive, setIsActive] = useState([true,false,false,false])
   const handleClick = (index) => {
      let newArr=[false,false,false,false]
      newArr[index]=true
      setIsActive(newArr)
   }
  return (
    <Stack style={{
                width:"90%",
                marginTop:"30px",
                padding:"10px",
                display:'flex',
                justifySelf:"center",
                borderRadius:"20px",
                backgroundColor: theme==="dark" ? '#181819' : 'white',
                minHeight:'92vh', color: theme==="dark"? "white": 'black',
                border:"1px solid rgb(64, 64, 65)",
                // paddingTop:"0px",
                paddingRight:"20px",
                // overflow:"auto"
              }}>
            <ul class="nav nav-underline w-100 sticky-top" style={{
              backgroundColor: theme==="dark" ? '#181819' : 'white',
              justifyContent:"center",
              marginBottom:"20px"
            }} >
              <li class="nav-item">
                <button onClick={()=>handleClick(0)} className={isActive[0] ? 'nav-link  active' : 'nav-link'} style={{color:theme==='dark' ?"#d2b660":"rgb(116, 53, 199)"}}>About</button>
              </li>
              <li class="nav-item">
                <button   onClick={()=>handleClick(1)} className={isActive[1] ? 'nav-link  active' : 'nav-link'} style={{color:theme==='dark' ?"#d2b660":"rgb(116, 53, 199)"}}>Projects</button>
              </li>
              <li class="nav-item">
                <button  onClick={()=>handleClick(2)} className={isActive[2] ? 'nav-link  active' : 'nav-link'}  style={{color:theme==='dark' ?"#d2b660":"rgb(116, 53, 199)"}}>Volunteering</button>
              </li>
              <li class="nav-item">
                <button onClick={()=>handleClick(3)} className={isActive[3] ? 'nav-link  active' : 'nav-link'}  style={{color:theme==='dark' ?"#d2b660":"rgb(116, 53, 199)"}}>Certificates</button>
              </li>
{/*               
              <li class="nav-item">
                <button  onClick={()=>handleClick(4)} className={isActive[4] ? 'nav-link  active' : 'nav-link'}  style={{color:theme==='dark' ?"#d2b660":"rgb(116, 53, 199)"}}>Contact</button>
              </li> */}
            </ul>
            <div style={{display:isActive[0]===true? "block" :"none"}}>
              <AboutMe ></AboutMe>
            </div> 
             <div style={{display:isActive[1]===true? "block" :"none"}}>
              <Projects style={{display:"none"}}></Projects>
            </div>
            <div style={{display:isActive[2]===true? "block" :"none"}}>
              <Volunteering style={{display:"none"}}></Volunteering>
            </div>
            <div style={{display:isActive[3]===true? "block" :"none"}}>
              <Certificates style={{display:"none"}}></Certificates>
            </div> 
      </Stack>
  )
}

export default Feed