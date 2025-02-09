import React from 'react'
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import EditIcon from '@mui/icons-material/Edit';
import SettingsSharpIcon from '@mui/icons-material/SettingsSharp';
import { useSelector,useDispatch } from 'react-redux';
import {setDark,setLight} from '../../themeSlice'
import LightModeIcon from '@mui/icons-material/LightMode';
import NightsStayIcon from '@mui/icons-material/NightsStay';

const Setting = () => {
    const theme=useSelector(state=>state.theme.theme)
    const dispatch=useDispatch();
    const switshTheme=()=>{
      if(theme==="dark"){
        dispatch(setLight())
      }
      else{
        dispatch(setDark())
      }
  }
  return (
    <SpeedDial
    ariaLabel="SpeedDial openIcon example"
    sx={{ 
      position: 'absolute',
       bottom: 16,
       right: 16 ,
       opacity:".8"
       
      }}
    icon={<SettingsSharpIcon openIcon={<EditIcon />} 
      sx={{
            backgroundColor: theme==="dark" ? '#272728' : 'rgb(116, 53, 199)',
            width:"100%",
            height:"100%",
            padding:"15px",
            borderRadius:"100%",
            
          }}/>}
  >
     <SpeedDialAction
                  icon={theme==="dark"?<LightModeIcon></LightModeIcon>:<NightsStayIcon></NightsStayIcon>}
                  tooltipTitle={"Theme"}
                  onClick={switshTheme}
     />

      <SpeedDialAction
        icon={theme==="dark"?<div>ع</div>:<div>EN</div>}
        tooltipTitle={"Theme"}
      />
  </SpeedDial>
  )
}

export default Setting