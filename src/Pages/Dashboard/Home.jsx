import React from 'react'
import { Input } from "@/components/ui/input"

const Home = () => {
  return (
    <div className='h-full'>
     Kindly prvoide the URL of your article:
     <Input type="url" placeholder="URL to your article" />
    </div>
  )
}

export default Home
