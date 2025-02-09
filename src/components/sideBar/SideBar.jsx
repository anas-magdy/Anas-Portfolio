import { Box, Stack} from '@mui/material';
import React from 'react'
import { useSelector } from 'react-redux';
import Photo from "./Photo.jpg"
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PhoneAndroidOutlinedIcon from '@mui/icons-material/PhoneAndroidOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import styled from 'styled-components';
import  data from '../../data.json'
const SideBar = () => {
  const theme=useSelector(state=>state.theme.theme)
  const butttonStyle={
    width:{xs:"65%",lg:"50%"},
    height:"35px",
    borderRadius:"8px",
    backgroundColor: theme==="dark" ? '#272728' : 'rgb(116, 53, 199)',
    color:"white",
    marginBottom:"10px",
    display:"flex",
    justifyContent:"center",
    alignItems:"center", 
  }
  const iconsStyle={
    width:"35px",
    height:"35px",
    backgroundColor: theme==="dark" ? '#272728' : 'rgb(116, 53, 199)',
    borderRadius:"10px",
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    color: theme==="dark" ? '#d2b660' : 'rgb(255, 255, 255)',
    margin:"10px 15px 10px 10px ",
  }
  const socialMediaIcon={
    margin:"10px",
    fontSize:"35px",
    color: theme==="dark"? '#a0a0a0' :  'rgb(116, 53, 199)'
  }
  const SectionStyle=styled.div`

  width: 90%;
  margin: auto 30px ;
  padding-bottom:10px;
  display: flex;
  justify-content: center;
  justify-self: center;
  align-items: center;
  border-radius: 20px;
  background-color: ${({ theme }) =>
    theme === 'dark' ? 'rgb(24, 24, 25)' : 'rgb(255, 255, 255)'}; 
  color: ${({ theme }) => (theme === 'dark' ? 'white' : 'black')};
  border: 1px solid rgb(64, 64, 65);
  transform-style: preserve-3d;
  over-flow:hidden;
  min-height:92vh;
  &::before {
        content: "";
        inset: 1px;
        position: absolute;
        right:-1px;
        top:-1px;
        left:-1px;
        bottom:-1px;
        background: ${({ theme }) =>theme === 'dark' ? '' : 'linear-gradient(45deg,rgb(116, 53, 199),rgb(116, 53, 199),rgb(116, 53, 199))'};
        filter: ${({ theme }) =>theme === 'dark' ?"blur(5px)": "blur(15px)"};
        transform: translate3d(0px, 0px, -10px);
        border-radius: inherit;
        pointer-events: none;
        transition: transform 0.3s ease;
  }`
  return (
    <Box sx={{
      position:{xs:"static" ,md:"fixed"},
      width: {md:"30%"},
      marginTop:"30px"
    }}>
      <SectionStyle theme={theme}>
  <Stack width={"100%"}>
        <Stack display={'flex'} alignItems={"center"} sx={{
          paddingTop:"20px"
        }}>
          <img src={Photo} alt={data.name} style={{
             width:"150px",
             borderRadius:"30px",
             height:"150px",
          }}/>
          <h2>{data.name}</h2>
          {
            (data.jobTitles).map((item, index)=>{
              return( <Box sx={butttonStyle}>{item}</Box>)
            })
          }
        </Stack>
        <hr width="80%" color='#343434' style={{margin:"10px auto "}}></hr>
        <Stack width={"100%"} paddingTop={"10px"} sx={{textOverflow:"ellipsis"}}>
            <Box display={'flex'} flexDirection={'row'}>
            <Box sx={iconsStyle}>
              <EmailOutlinedIcon fontSize="small"></EmailOutlinedIcon>
            </Box> 
              <Stack sx={{textOverflow:"ellipsis"}}>
                <Box>EMAIL</Box>
                <Box sx={{textOverflow:"ellipsis"}}>{data.email}</Box>
              </Stack>
            </Box>
            <Box display={'flex'} flexDirection={'row'}>
            <Box sx={iconsStyle}>
                <PhoneAndroidOutlinedIcon fontSize="small"></PhoneAndroidOutlinedIcon>
              </Box>
              <Stack>
                <Box>PHONE</Box>
                <Box>{data.phone}</Box>
              </Stack>
            </Box>
            <Box display={'flex'} flexDirection={'row'}>
            <Box sx={iconsStyle}>
                <CalendarMonthOutlinedIcon fontSize="small"></CalendarMonthOutlinedIcon>
              </Box>
              <Stack>
                <Box>BIRTHDAY</Box>
                <Box>{data.birthDay}</Box>
              </Stack>
            </Box>
            <Box display={'flex'} flexDirection={'row'}>
            <Box sx={iconsStyle}>
                <LocationOnOutlinedIcon fontSize="small"></LocationOnOutlinedIcon>
              </Box>
              <Stack>
                <Box >LOCATION</Box>
                <Box>{data.location}</Box>
              </Stack>
            </Box>
        </Stack>
        <Box sx={{display:"flex",justifyContent:'center'}}>
          <a href={data.socialMedia.facebook}><FacebookOutlinedIcon sx={socialMediaIcon} ></FacebookOutlinedIcon></a>
          <a href={data.socialMedia.linkedin}><LinkedInIcon sx={socialMediaIcon}></LinkedInIcon></a>
          <a href={data.socialMedia.github}><GitHubIcon sx={socialMediaIcon}></GitHubIcon></a>
        </Box>

  </Stack>
</SectionStyle>


    </Box>
  )
}

export default SideBar