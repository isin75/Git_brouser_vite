import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Layout from '../Layout'
import User, { repoLoader } from '../src/components/user/user'
import Repo, { readLoader } from '../src/components/repo/repo'
import SearchBlock from '../src/components/searchBlock/searchBlock'
import Home from '../src/pages/home/home'

const Routers = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<SearchBlock />} />
          <Route path=":userName" element={<User />} loader={repoLoader} />
          <Route path=":userName/:repository" element={<Repo />} loader={readLoader} />
          <Route path="home" element={<Home />} />
        </Route>
      </Routes>
    </Router>
  )
}
export default Routers
