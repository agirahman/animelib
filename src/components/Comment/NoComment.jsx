'use client'

import { Chats } from "@phosphor-icons/react"

const NoComment = () => {
    return (
        <div className="min-h-screen max-w-xl mx-auto flex   flex-col justify-center items-center">
       
          <Chats className="text-accent2" size={100} weight="thin"/>
          <div className="text-center mt-4">
          <h1 className="text-3xl tracking-tight text-gray-900 sm:text-4xl">No Comments Yet</h1>
          <p className="text-base leading-7 text-gray-600">Sorry, we couldn’t find the comments you’re looking for.</p>
          </div>
        
    </div>
    )
}

export default NoComment