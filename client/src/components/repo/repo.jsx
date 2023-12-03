/* eslint-disable import/no-extraneous-dependencies */
import React from 'react'
import { Link, useLoaderData } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import axios from 'axios'

const Repo = () => {
  const { readMe, userName } = useLoaderData()

  return (
    <div className="flex flex-col bg-[#0D1117]">
      <div className="flex flex-col justify-center items-center my-auto">
        <div className="flex flex-col bg-[#161B22] p-10 rounded-xl select-none justify-between items-center">
          <div className="text-white overflow-auto h-[350px] w-[600px] text-center p-3">
            {readMe ? <ReactMarkdown>{readMe}</ReactMarkdown> : 'ReadMe not found'}
          </div>
          <div className="text-white mt-4 text-xl font-semibold">
            <Link to={`/${userName}`}>Back to list</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export const readLoader = async ({ params }) => {
  const { userName, repository } = params
  const url = `https://raw.githubusercontent.com/${userName}/${repository}/master/README.md`
  try {
    const { data } = await axios(url)
    const readMe = await data
    return { readMe, userName }
  } catch (err) {
    const readMe = ''
    return { readMe, userName }
  }
}

export default Repo
