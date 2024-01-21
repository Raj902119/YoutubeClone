import React from 'react'
import { Stack,Box } from '@mui/material'

import VideoCard from "./VideoCard.jsx";
import ChannelCard from "./ChannelCard.jsx";
import Loader from './Loader.jsx';

const Videos = ({videos,direction}) => {
  if(!videos?.length) return <Loader />;
  return (
    <Stack direction={direction || 'row'} flexWrap='wrap'
    justifyContent='center' gap={2} alignItems="start">
      {videos.map((item,idx)=>(
        <Box key={idx}>
        {item.id.videoId ? <VideoCard video={item} /> : null}
        {item.id.channelId ? <ChannelCard channelDetails={item} /> : null}
        </Box>
      ))}
    </Stack>
  )
}

export default Videos
