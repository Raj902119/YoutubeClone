import React from 'react'
import { Typography,Box,CardContent,CardMedia } from '@mui/material'
import { CheckCircle } from '@mui/icons-material'
import {Link} from 'react-router-dom'

import {demoProfilePicture} from '../utils/constants'
const ChannelCard = ({channelDetails,marginTop}) => {
  return (
    <Box sx={{
      boxShadow:'none',
      borderRadius:'20px',
      width: { sm: '350px', md: '230px', xs: '100%' },
      height: { sm: '300px', md: '290px', xs: '100%' },
      display:'flex',
      justifyContent:'center',
      alignItems:"center",
      margin: 'auto',
      marginTop,
      }}>
      <Link to={`/channel/${channelDetails?.id?.channelId}`}>
        <CardContent sx={{
          display:'flex',flexDirection:'column',
          justifyContent:'center',textAlign:'center',
          color:'#fff'}}>
            <CardMedia 
            image={channelDetails?.snippet?.thumbnails?.high?.url || demoProfilePicture}
            alt={channelDetails?.snippet?.title}
            sx={{borderRadius:'50%',height:'180px',width:'180px',mb:2,border:'1px solid #e3e3e3'}} />
              <Typography variant="h6">
                {channelDetails?.snippet?.title}
                <CheckCircle sx={{fontSize:14,color:'gray',ml:'5px'}}/>
              </Typography>
              {channelDetails?.statistics?.subscriberCount && (
                <Typography>
                  {parseInt(channelDetails?.statistics?.subscriberCount).toLocaleString()}Subscribers
                </Typography>
              )}
          </CardContent>
      </Link>
    </Box>
  )
}

export default ChannelCard
