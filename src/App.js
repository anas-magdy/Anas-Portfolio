import './App.css';
import Grid from  '@mui/material/Grid2'
import Feed from './components/feed/Feed';
import SideBar from './components/sideBar/SideBar';
import { Box } from '@mui/material';
import { useSelector } from 'react-redux';
import Setting from './components/assets/setting';

function App() {
  const theme=useSelector(state=>state.theme.theme)
  return (
  <>

  <Box style={{
          backgroundColor: theme==="dark" ? '#1E201E' : 'rgb(231, 231, 231)',
          color: theme==="dark"? "white": 'black',
          height:"100vh",
          overflow:"hidden",
          fontSize:"1rem"
        }}>
    
    <Grid container spacing={4} sx={{
                display:"flex",
                alignItems:"start",
                justifyContent:"center",
                overflowY:"auto",
                height:"100vh",paddingBottom:"25px",
                
    }}>
      <Grid size={{ xs: 12, md: 3.75 }} >
        <SideBar></SideBar>
      </Grid>
      <Grid size={{ xs: 12, md: 7}}>
        <Feed></Feed>
      </Grid>
    <Setting></Setting>
    </Grid>
    
  </Box>

  </>
  );
}

export default App;
