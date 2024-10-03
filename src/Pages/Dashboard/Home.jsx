import React from 'react'
import { Input } from "@/components/ui/input"

const Home = () => {
  return (
    <div className='flex flex-col items-center content-center justify-center h-60'>
      <h1 className='m-2 text-xl font-bold'>Kindly prvoide the URL of your article:</h1>
      <Input type="url" placeholder="URL to your article" />
    </div>
  )
}

export default Home
