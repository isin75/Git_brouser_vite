import React from 'react'
import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'

import Layout from '../Layout'
import User, { repoLoader } from '../src/components/user/user'
import Repo, { readLoader } from '../src/components/repo/repo'
import SearchBlock from '../src/components/searchBlock/searchBlock'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<SearchBlock />} />
      <Route path="/:userName" element={<User />} loader={repoLoader} />
      <Route path="/:userName/:repository" element={<Repo />} loader={readLoader} />
    </Route>
  )
)

export default router
