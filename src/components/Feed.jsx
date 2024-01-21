import React from 'react'
import { useState,useEffect } from 'react'
import { Box, Typography, Stack } from '@mui/material'
import Sidebar from './Sidebar'
import Videos from './Videos'

import { fetchAPI } from '../utils/fetchAPI'

const Feed = () => {
  const[selected,setselected] = useState("NEW")
  const[videos,setvideos] = useState([])

  useEffect(()=>{
    setvideos([]);
      fetchAPI(`search?part=snippet&q=${selected}`).then((data) => setvideos(data.items))
  },[selected]);

  return (
    <Stack sx={{flexDirection: {sx:'column', md:'row'} }}>
      <Box sx={{height: {sx: 'auto', md:'92vh'}, borderRight:'1px solid #3d3d3d', px:{sx:0, md:2}}}>
        <Sidebar selected={selected} setselected={setselected}/>
        <Typography className='copyright' variant='body2' sx={{mt:1.5,color:'#fff'}}>
          Copyright 2022 JSM Media
        </Typography>
      </Box>

      <Box p={2} sx={{overflowY:'auto',height:'90vh',flex:2}}>
        <Typography cariant="h4" fontWeight="bold" mb={2} sx={{color:'white'}}>
          {selected} <span style={{color:'#F31503'}}>videos</span>
        </Typography>
        <Videos videos={videos}/>
      </Box>  
    </Stack>
  )
}

export default Feed
