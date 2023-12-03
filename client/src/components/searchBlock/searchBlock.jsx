import React from 'react'
import Search from '../../common/search/search'

const SearchBlock = () => {
  return (
    <div className="flex flex-col bg-[#161B22] rounded-xl select-none justify-start items-center h-[350px] px-6">
      <span className="text-xl font-bold text-white mt-[125px] mb-[32px]">
        Enter username on GitHub
      </span>
      <Search />
    </div>
  )
}

export default SearchBlock
