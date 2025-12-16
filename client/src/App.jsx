
import { ResourceTemplateSchema } from '@modelcontextprotocol/sdk/types.js'
import React from 'react'
// import { assets } from './assets/assets'
import {Route, Routes } from 'react-router-dom'
import Login from './pages/Login.jsx'
import Feed from './pages/Feed.jsx'
import Messages from './pages/Messages.jsx'
import ChatBox from './pages/ChatBox.jsx'
import Connections from './pages/Connections.jsx'
import Discover from './pages/Discover.jsx'
import Profile from './pages/Profile.jsx'
import CreatePost from './pages/CreatePost.jsx'
import Layout from './pages/Layout.jsx'

import {useUser} from '@clerk/clerk-react'

const App = () => {
  const {user} = useUser()
  return (
    <>
      {/* <h1 className='text-3xl font-bold underline'>
        Hello, world!
        <img src={assets.bgImage} alt="Background" className='w-32 h-32 object-cover inline-block ml-4' />
      </h1> */}

      <Routes>
        <Route path='/' element={!user ? <Login /> : <Layout />}>
        <Route index element={<Feed />} />
        <Route path='messages'element={<Messages />} />
        <Route path='messages/:userId' element={<ChatBox />} />
        <Route path='connections' element={<Connections />} />
        <Route path='discover' element={<Discover />} />
        <Route path='profile' element={<Profile />} />
        <Route path='profile/:profileId' element={<Profile />} />
        <Route path='create-post' element={<CreatePost />} />
        </Route>
      </Routes>

    </>
  )
}

export default App