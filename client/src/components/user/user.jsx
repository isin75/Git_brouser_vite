/* eslint-disable import/no-extraneous-dependencies */
import React from 'react'
import { Link, useLoaderData } from 'react-router-dom'
import axios from 'axios'

const User = () => {
  const { userRepo, userName } = useLoaderData()

  return (
    <div className="flex flex-col bg-[#0D1117]">
      <div className="flex flex-col justify-center items-center">
        <div className="flex flex-col bg-[#161B22] p-10 rounded-xl">
          <div className="flex flex-col select-none justify-between items-center overflow-auto h-[350px] text-white px-3">
            {!userRepo && userRepo.length > 0 ? (
              userRepo.map((repo) => (
                <Link to={`/${userName}/${repo.name}`} key={repo.id}>
                  {repo.name}
                </Link>
              ))
            ) : (
              <div>No repositories found</div>
            )}
          </div>
          <div className="text-white mt-4 text-xl font-semibold text-center">
            <Link to="/">Back to search</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export const repoLoader = async ({ params }) => {
  const { userName } = params
  const url = `https://api.github.com/users/${userName}/repos`
  try {
    const { data } = await axios(url)
    const userRepo = await data
    return { userRepo, userName }
  } catch (err) {
    const userRepo = ''
    return { userRepo, userName }
  }
}

export default User
