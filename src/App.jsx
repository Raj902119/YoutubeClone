import React from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import { Box } from '@mui/material'

import Feed from './components/Feed'
import VideoDetail from './components/VideoDetail'
import ChannelDetail from './components/ChannelDetail'
import SearchFeed from './components/SearchFeed'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <BrowserRouter>
      <Box sx={{backgroundColor:'#000'}}>
      <Navbar />
        <Routes>
          <Route path="/" exact element={<Feed />} />
          <Route path="/video/:id" exact element={<VideoDetail />} />
          <Route path="/channel/:id" exact element={<ChannelDetail />} />
          <Route path="/search/:searchTerm" exact element={<SearchFeed />} />
        </Routes>
      </Box>
    </BrowserRouter>
  )
}

export default App
