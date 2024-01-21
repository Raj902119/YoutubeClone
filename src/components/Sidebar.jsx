import React from 'react'
import { Stack } from '@mui/material'
import { categories } from '../utils/constants'

import MusicNoteIcon from '@mui/icons-material/MusicNote';
import HomeIcon from '@mui/icons-material/Home';
import CodeIcon from '@mui/icons-material/Code';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import SchoolIcon from '@mui/icons-material/School';
import FaceRetouchingNaturalIcon from '@mui/icons-material/FaceRetouchingNatural';
import CheckroomIcon from '@mui/icons-material/Checkroom';
import GraphicEqIcon from '@mui/icons-material/GraphicEq';
import TheaterComedyIcon from '@mui/icons-material/TheaterComedy';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import DeveloperModeIcon from '@mui/icons-material/DeveloperMode';
import StarIcon from '@mui/icons-material/Star';
import StarsIcon from '@mui/icons-material/Stars';
import FlareIcon from '@mui/icons-material/Flare';

import { red } from '@mui/material/colors';



const Sidebar = ({selected,setselected}) => {
  return (
    <Stack 
      direction="row"
      sx={{overflowY:"auto",
      height: {sx:'auto',md:'95%'},
      flexDirection:{md:'column'},
      }}>
      
      {categories.map((Category)=>(
        <button className='category-btn' 
        style={{background: Category.name === selected 
        && '#FC1503',color:'white'}}
        key={Category.name}
        onClick={()=>setselected(Category.name)}>

            <span style={{color:Category.name === selected ? 'white' :
            'red', marginRight:'15px'}}>

            {(() => {
                switch (Category.icon) {
                case 'HomeIcon': return <HomeIcon sx={{ color: red[500] }}/>;
                case 'Star': return <StarIcon sx={{ color: red[500] }}/>;
                case 'CodeIcon': return <CodeIcon sx={{ color: red[500] }}/>;
                case 'Stars': return <StarsIcon sx={{ color: red[500] }}/>;
                case 'mil': return <FlareIcon sx={{ color: red[500] }}/>;
                case 'MusicNoteIcon': return <MusicNoteIcon sx={{ color: red[500] }}/>;
                case 'ShoolIcon': return <SchoolIcon sx={{ color: red[500] }}/>;
                case 'GrapicEqIcon': return <GraphicEqIcon sx={{ color: red[500] }}/>;
                case 'OndemandideoIcon': return <OndemandVideoIcon sx={{ color: red[500] }}/>;
                case 'SportsEsortsIcon': return <SportsEsportsIcon sx={{ color: red[500] }}/>;
                case 'LveTvIcon': return <LiveTvIcon sx={{ color: red[500] }}/>;
                case 'FitnessCnterIcon': return <FitnessCenterIcon sx={{ color: red[500] }}/>;
                case 'ChecroomIcon': return <CheckroomIcon sx={{ color: red[500] }}/>;
                case 'FaceRetouchingNauralIcon': return <FaceRetouchingNaturalIcon sx={{ color: red[500] }}/>;
                case 'TheaterCmedyIcon': return <TheaterComedyIcon sx={{ color: red[500] }}/>;
                case 'Fitness': return <FitnessCenterIcon sx={{ color: red[500] }}/>;
                case 'DevelopeMo': return <DeveloperModeIcon sx={{ color: red[500] }}/>;
                default: return null;
                }
            })()}
            </span>
            <span style={{ opacity: Category.name === setselected ? "1" : "0.8" }}>{Category.name}</span>

        </button>
      ))}
      </Stack>
  )
}

export default Sidebar
