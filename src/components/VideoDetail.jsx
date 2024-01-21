import React from 'react'
import { useState,useEffect } from 'react'
import { useParams,Link } from 'react-router-dom'
import ReactPlayer from 'react-player'
import { Typography,Box,Stack } from '@mui/material'
import { CheckCircle } from '@mui/icons-material'
import Loader from './Loader'

import Videos from './Videos'
import { fetchAPI } from '../utils/fetchAPI'
const VideoDetail = () => {
  const [videoDetial,setvideoDetail]=useState();
  const [videos,setvideos] =useState([]);

  const {id}=useParams();
  useEffect(()=>{
    fetchAPI(`videos?part=snippet,statistics&id=${id}`)
    .then((data)=>setvideoDetail(data.items[0]));

    fetchAPI(`search?part=snippet&realatedToVideoId=${id}&type=video`)
    .then((data)=>setvideos(data.items));
  },[id]);
  if(!videoDetial?.snippet) return <Loader />;
  // const { snippet : {title,channelId,channelTitle}, statistics:{
  //   viewCount, likeCount} } = videoDetial;
  return (
    <Box minHeight='95vh' margin='10px'>
      <Stack direction={{xs:'column',md:'row'}}>
        <Box flex={2}>
          <Box sx={{width:'100%',position:'sticky',top:'90px'}}>
            <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} 
              className="react-player" controls />
              <Typography color='#fff' variant='h5' fontWeight='bold' p={2}>
                {videoDetial?.snippet?.title}
              </Typography>
              <Stack direction='row' justifyContent='space-between' sx={{
                color:'#fff'}} py={1} px={2}>
                   <Link to={`/channel/${videoDetial?.snippet?.channelId}`}>
                   <Typography sx={{ subtitle1: { sm: 'subtitle1', md: 'h6' } }} color="#fff">
                      {videoDetial?.snippet?.channelTitle}
                      <CheckCircle sx={{fontSize:'12px',color:'gray',ml:'5px'}}/>
                   </Typography>
                   </Link>
                  <Stack direction='row' gap='20px' alignItems='center'>
                    <Typography variant='body1' sx={{opacity:0.7}}>
                      {parseInt(videoDetial?.statistics?.viewCount).toLocaleString()} views
                    </Typography>
                    <Typography variant='body1' sx={{opacity:0.7}}>
                      {parseInt(videoDetial?.statistics?.likeCount).toLocaleString()} likes
                    </Typography>
                  </Stack>
                </Stack>
          </Box>
        </Box>
        <Box px={2} py={{md:1, xs:5}} justifyContent='center' alignContent='center'>
      <Videos videos={videos} direction='column'/>
      </Box>
      </Stack>
    </Box>
  )
}

export default VideoDetail
