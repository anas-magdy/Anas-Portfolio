import React from 'react'
import { useSelector } from 'react-redux'
import DownloadIcon from '@mui/icons-material/Download';
import data from "../../../data.json"
const AboutMe = () => {
const theme=useSelector(state=>state.theme.theme)
const butttonStyle={
        height:"35px",
        width:"150px",
        borderRadius:"8px",
        backgroundColor: theme==="dark" ? '#272728' : 'rgb(116, 53, 199)',
        color:"white",
        marginBottom:"10px",
        display:"flex",
        justifyContent:"start",
        alignItems:"center",
      }
const titleStyles={
  borderBottom:"1px solid" ,
  paddingBottom:"5px",
  marginBottom:"20px"
}
  return (
    <div style={{padding:"0px 20px 20px 20px"}}>
                <h4 style={titleStyles}>
                  About me
                </h4>
                <p>{data.about.english}</p>
                <h4 style={titleStyles}>
                  Education
                </h4>
                <p>{data.education}</p>
                <h4 style={titleStyles}>Skills</h4>
                <div className='row g-1' >
                  { data.skills.map((skill)=>{
                        return(
                          <div className='col-6 col-md-4 d-flex justify-content-center'>
                            <button style={butttonStyle}>
                              {Object.values(skill)!==""&&
                                <img src={`./icons/${Object.values(skill)}`} alt="" width={"20px"} style={{marginRight:"10px",marginLeft:"10px",color: theme==="dark" ? '#d2b660' : 'white'}}></img>
                              }
                             
                               {Object.keys(skill)}
                            </button>
                          </div>
                    )})
                  }
                </div>
                  <a href="Anas-Magdy.pdf" download="Anas's Resume" style={{textDecoration:"none"}}>
                    <button style={{
                        height:"40px",
                        // width:"220px",
                        borderRadius:"8px",
                        backgroundColor: theme==="dark" ? '#272728' : 'rgb(116, 53, 199)',
                        color:"white",
                        display:"flex",
                        justifyContent:"center",
                        alignItems:"center",
                        justifySelf:"end",
                        marginTop:"30px"
                    }}>
                    <DownloadIcon
                      style={{
                        marginRight:"10px",
                        color: theme==="dark" ? '#d2b660' : 'white'
                        }}>
                    </DownloadIcon>Download Resume</button>
                  </a>
            </div>
  )
}

export default AboutMe